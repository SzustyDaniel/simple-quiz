import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./WrongCount.scss";

type WrongCountProps = {
  wrongAnswersCount: number;
};

const WrongCount = ({ wrongAnswersCount }: WrongCountProps) => {
  const wrongItems: number[] = [];
  for (let index = 0; index < wrongAnswersCount; index++) {
    wrongItems.push(index);
  }

  return (
    <div className='wrong-count-container'>
      {wrongItems.map((i) => (
        <FontAwesomeIcon
          key={i}
          className='wrong-count-item'
          icon={faTimes}
          size={"3x"}
        />
      ))}
    </div>
  );
};

export default WrongCount;
