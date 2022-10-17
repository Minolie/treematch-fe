import { QuizStore as QuizStoreModel } from "../store/Quiz";

export as namespace IQuizStore;

export type QuizStore = QuizStoreModel;

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

export interface Match {
  name: string;
  description: string;
}
