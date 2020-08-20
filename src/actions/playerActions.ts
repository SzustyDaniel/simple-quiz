import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";
import { Player } from "../models";
import axios from "axios";

const playersInstance = axios.create({
  baseURL: "http://localhost:3001/players",
});

export function createNewPlayer(player: Player) {
  return playersInstance
    .post("", { id: player.id, name: player.name, score: player.score })
    .then(() =>
      dispatcher.dispatch({
        actionType: actionTypes.CREATE_USER,
        player,
      })
    );
}

export function updatePlayer(player: Player) {
  return playersInstance
    .put(`${player.id}`, {
      id: player.id,
      name: player.name,
      score: player.score,
    })
    .then(() =>
      dispatcher.dispatch({
        actionType: actionTypes.UPDATE_USER,
        player,
      })
    );
}

export function getPlayers() {
  return playersInstance.get("").then((results) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_USERS,
      players: results.data.map(
        (p: { id: number; name: string; score: number }) =>
          new Player(p.id, p.name, p.score)
      ),
    });
  });
}

export function getPlayerById(id: number) {
  return playersInstance.get(`${id}`).then((results) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_USER,
      player: new Player(
        results.data.id,
        results.data.name,
        results.data.score
      ),
    });
  });
}
