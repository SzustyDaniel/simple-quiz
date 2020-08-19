import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";
import * as questionService from "../services/questions.service";
import { Category } from "../models";

export function getQuestionsCategories() {
  return questionService
    .getCategories()
    .then((categories) => {
      dispatcher.dispatch({
        actionType: actionTypes.LOAD_CATEGORIES,
        categories,
      });
    })
    .catch((error) => console.error(error));
}

export function loadQuestionsFromCategory(amount: number, category: Category) {
  return questionService
    .getQuestions(amount, category)
    .then((questions) => {
      dispatcher.dispatch({
        actionType: actionTypes.LOAD_QUESTIONS,
        questions,
      });
    })
    .catch((error) => console.error(error));
}
