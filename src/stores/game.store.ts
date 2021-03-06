import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";
import { Category, Game } from "../models";
import { Dispatcher } from "flux";

const CHANGE_EVENT = "change";
let _categories: Category[] = [];
let _game: Game | undefined = undefined;

class GameStore extends EventEmitter {
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

  getGame() {
    return _game;
  }
}

const store = new GameStore();

dispatcher.register((action: any) => {
  switch (action.actionType) {
    case actionTypes.LOAD_CATEGORIES:
      _categories.push(...action.categories);
      store.emitChange();
      break;
    case actionTypes.CREATE_GAME:
      _game = action.game;
      store.emitChange();
      break;
    case actionTypes.UPDATE_GAME:
      _game = action.game;
      break;
    case actionTypes.END_GAME:
      _game = undefined;
      store.emitChange();
      break;
    default:
  }
});

export default store;
