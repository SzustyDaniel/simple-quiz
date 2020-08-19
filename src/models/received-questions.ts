import { Category } from "./category";

export interface ReceivedQuestions {
  category: string;
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
}
