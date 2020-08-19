import { Question, Category, ReceivedQuestions } from "../models";
import axios from "axios";

const questionsApi = axios.create({
  baseURL: "https://opentdb.com",
});

export function getQuestions(amount: number, category?: Category) {
  return questionsApi
    .get("/api.php", {
      params: { amount: amount, category: category?.id },
    })
    .then((results) => {
      const questionsReceived: ReceivedQuestions[] = results.data.results;
      return questionsReceived.map((qr) => {
        return new Question(
          qr.question,
          qr.correct_answer,
          [qr.correct_answer, ...qr.incorrect_answers],
          false,
          { id: category?.id || 0, name: category?.name || "Mixed" }
        );
      });
    });
}

export function getCategories(): Promise<Category[]> {
  return questionsApi.get("/api_category.php").then((result) => {
    return result.data.trivia_categories;
  });
}
