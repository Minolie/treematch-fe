import { makeAutoObservable } from "mobx";
import { TreeMatchClient } from "../api/treematch.api";

export class QuizStore {
  questionLoading = true;
  question: IQuizStore.Quiz = {
    step_id: 1,
    question: "",
    answers: [],
  };
  error = "";
  response: IQuizStore.Answer = {
    step_id: 1,
    answer: "",
  };
  answers: string[] = [];
  stepId = 1;
  match: IQuizStore.Match = {
    name: "",
    description: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  setQuizLoading = (loading: boolean): void => {
    this.questionLoading = loading;
  };

  setQuestion = (question: string) => {
    this.question.question = question;
  };

  setError = (err: string): void => {
    this.error = err;
  };

  getQuestions = async (): Promise<IQuizStore.Quiz> => {
    const questionResponse = await TreeMatchClient.FetchQuestion();

    if (questionResponse) {
      this.setQuizLoading(true);
      this.setQuestion(questionResponse.question);
      this.setAnswers(questionResponse.answers);
      this.setQuizLoading(false);
    } else {
      this.setError("Error");
    }

    return questionResponse;
  };

  /*sets the users answer */
  setAnswer = (answer: IQuizStore.Answer) => {
    this.response = answer;
  };

  /* answer submit response  */
  setAnswers = (answer: []) => {
    this.answers = answer;
  };

  setStepId = (step: number) => {
    this.stepId = step;
  };

  setMatch = (match: IQuizStore.Match) => {
    this.match = match;
    this.stepId = 1;
  };

  submitAnswer = async (answer: IQuizStore.Answer): Promise<void> => {
    const answerResponse = await TreeMatchClient.SendAnswers(answer);

    if (answerResponse?.match === null && answerResponse?.question) {
      this.setQuestion(answerResponse?.question?.question);
      this.setAnswers(answerResponse?.question?.answers);
      this.setStepId(answerResponse?.question?.step_id);
    } else if (answerResponse?.question === null && answerResponse?.match) {
      this.setMatch(answerResponse.match);
    }
  };
}

export default new QuizStore();
