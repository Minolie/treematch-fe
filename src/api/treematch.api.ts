import axios from "axios";

export interface Quiz {
    step_id:number;
    question: string;
    answers: [];
}

export interface Answer {
    match: {
        description: string;
        name: string;
    };
    question: {
        answers: [];
        question: string;
        step_id: number;

    };
}

const baseURL = () => {
    const apiURL = process.env.REACT_APP_API_URL ?? process.env.REACT_APP_API_URL;
    return apiURL;
};

const getInstance = () => {
    return axios.create({
        baseURL: baseURL()
    })
}

export class TreeMatchClient {

    public static async FetchQuestion(): Promise<Quiz> {
        const quizResp = await getInstance().get('/api/begin');
        return quizResp?.data?.question;
    }

    public static async SendAnswers(step_id: number, answer: string) : Promise<Answer> {
        const answerResp = await getInstance().post('/api/answer',{
            step_id : step_id,
            answer: answer
        });
        return answerResp?.data;
    }
}