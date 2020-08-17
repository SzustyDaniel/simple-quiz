import React from "react";
import "./WrongCount.scss";

type WrongCountProps = {
  wrongAnswersCount: number;
};

const WrongCount = ({ wrongAnswersCount }: WrongCountProps) => {
  return <p>{wrongAnswersCount}</p>;
};

export default WrongCount;
