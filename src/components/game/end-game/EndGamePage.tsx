import React, { useState, useEffect } from "react";
import "./EndGamePage.scss";
import { Game, Player } from "../../../models";
import gameStore from "../../../stores/game.store";
import { updatePlayer, getPlayers } from "../../../actions/playerActions";
import { endCurrentGame } from "../../../actions/gameActions";

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
  }, [game, player, props.history]);

  const handleButtonPress = (url: string) => {
    props.history.push(url);
  };

  return (
    <div className='end-game__container'>
      <h2 className='end-game__title'>Game ended</h2>
      <div className='end-game__info'>
        <strong>Name:</strong> {player?.name}
      </div>
      <div className='end-game__info'>
        <strong>Score:</strong> {player?.score}{" "}
        <span className='special-note'>
          (score is calculated by difficulty * number of correct answers *{" "}
          {game?.BASE_ANSWER_SCORE})
        </span>
      </div>
      <div className='end-game__info'>
        <strong>Correct answers:</strong> {game?.totalCorrectAnswers} from{" "}
        {game?.questions.length}
      </div>
      <div className='end-game__info'>
        <strong>Wrong answers:</strong> {game?.wrongAnswersCount} from{" "}
        {game?.questions.length}
      </div>
      <div className='end-game__info'>
        <strong>Difficulty:</strong> {game?.difficulty}
      </div>
      <div className='end-game__info'>
        <strong>Category:</strong> {game?.category?.name}
      </div>
      <div className='end-game__controls'>
        <button className='app-button' onClick={() => handleButtonPress("/")}>
          Go back to home page
        </button>
        <button
          className='app-button'
          onClick={() => handleButtonPress("/game/create")}>
          Start a new quiz
        </button>
        <button
          className='app-button'
          onClick={() => handleButtonPress("/top")}>
          Go to top scores
        </button>
      </div>
    </div>
  );
};

export default EndGamePage;
