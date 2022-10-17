import axios from "axios";

export interface Quiz {
  step_id: number;
  question: string;
  answers: [];
}

export interface QuizResponse {
  match: {
    description: string;
    name: string;
  };
  question: Quiz;
}

export interface Answer {
  step_id: number;
  answer: string;
}

const baseURL = () => {
  const apiURL = process.env.REACT_APP_API_URL ?? process.env.REACT_APP_API_URL;
  return apiURL;
};

const getInstance = () => {
  return axios.create({
    baseURL: baseURL(),
  });
};

export class TreeMatchClient {
  public static async FetchQuestion(): Promise<Quiz> {
    const quizResp = await getInstance().get("/api/begin");
    return quizResp?.data?.question;
  }

  public static async SendAnswers(answer: Answer): Promise<QuizResponse> {
    const answerResp = await getInstance().post("/api/answer", answer);
    return answerResp?.data;
  }
}
