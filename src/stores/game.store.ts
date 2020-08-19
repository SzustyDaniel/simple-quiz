import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";
import { Game } from "../models";

const CHANGE_EVENT = "change";
let game: Game;

class GameStore extends EventEmitter {}

const store = new GameStore();

export default store;
