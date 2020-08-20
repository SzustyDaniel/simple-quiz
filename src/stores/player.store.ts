import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";
import { Player } from "../models";

const CHANGE_EVENT = "change";
let _players: Player[] = [];

class PlayerStore extends EventEmitter {
  addChangeListener(callback: any) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback: any) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getPlayers() {
    return _players;
  }

  getPlayerById(id: number) {
    return _players.find((p) => p.id === id);
  }
}

const store = new PlayerStore();

dispatcher.register((action: any) => {
  switch (action.actionType) {
    case actionTypes.CREATE_USER:
      _players.push(action.player);
      store.emitChange();
      break;
    case actionTypes.UPDATE_USER:
      const playerIndex = _players.findIndex((p) => p.id === action.player.id);
      const updatedPlayers = _players.splice(playerIndex, 1, action.player);
      _players = updatedPlayers;
      store.emitChange();
      break;
    case actionTypes.LOAD_USERS:
      _players = action.players;
      store.emitChange();
      break;
    default:
  }
});

export default store;
