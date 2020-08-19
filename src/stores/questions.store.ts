import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";
import { Category } from "../models";
import { Dispatcher } from "flux";

const CHANGE_EVENT = "change";
let _categories: Category[] = [];

class QuestionsStore extends EventEmitter {
  addChangeListener(callback: any) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback: any) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCategories(): Category[] {
    return _categories;
  }
}

const store = new QuestionsStore();

dispatcher.register((action: any) => {
  switch (action.actionType) {
    case actionTypes.LOAD_CATEGORIES:
      _categories.push(...action.categories);
      store.emitChange();
      break;
    default:
  }
});

export default store;
