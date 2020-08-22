import React, { useState, useEffect } from "react";
import "./EndGamePage.scss";
import { Game, Player } from "../../../models";
import gameStore from "../../../stores/game.store";
import { updatePlayer } from "../../../actions/playerActions";

const EndGamePage = (props: any) => {
  const [game, setGame] = useState<Game>();
  const [player, setPlayer] = useState<Player>();

  useEffect(() => {
    if (gameStore.getGame()) {
      setGame(gameStore.getGame());
      const receivedPlayer = gameStore.getGame()?.player;
      if (receivedPlayer) {
        gameStore.getGame()?.calculateTotalScore();
        receivedPlayer.score = gameStore.getGame()?.totalScore || 0;
        setPlayer(receivedPlayer);
        updatePlayer(receivedPlayer);
      }
    } else {
      props.history.push("/game/create");
    }
  }, [game, player]);

  return (
    <div>
      <h2>Game ended</h2>
      <div>{player?.score}</div>
      <div>{player?.name}</div>
    </div>
  );
};

export default EndGamePage;
