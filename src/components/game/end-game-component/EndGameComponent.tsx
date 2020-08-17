import "./EndGameComponent.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

type EndGameProps = {
  onEndGame: any;
};

const EndGameComponent = ({ onEndGame }: EndGameProps) => {
  return (
    <FontAwesomeIcon
      className='end-game-component'
      icon={faTimesCircle}
      size='5x'
      onClick={onEndGame}
    />
  );
};

export default EndGameComponent;
