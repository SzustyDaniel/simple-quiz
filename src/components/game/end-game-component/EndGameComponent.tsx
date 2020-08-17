import "./EndGameComponent.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const EndGameComponent = (props: any) => {
  return (
    <FontAwesomeIcon
      className='end-game-component'
      icon={faTimesCircle}
      size='5x'
    />
  );
};

export default EndGameComponent;
