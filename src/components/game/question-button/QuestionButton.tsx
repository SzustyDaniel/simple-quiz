import React from "react";
import "./QuestionButton.scss";

type QuestionButtonProps = {
  answer: string;
  selectedAnswer: string;
  isCorrectAnswer: boolean;
  userSelectedAnAnswer: boolean;
  onClick: any;
};

const QuestionButton = ({
  answer,
  isCorrectAnswer,
  userSelectedAnAnswer,
  selectedAnswer,
  onClick,
}: QuestionButtonProps) => {
  let state = "question-button ";

  if (userSelectedAnAnswer && isCorrectAnswer) {
    state += "correct-answer";
  } else if (
    userSelectedAnAnswer &&
    !isCorrectAnswer &&
    answer === selectedAnswer
  ) {
    state += "wrong-answer";
  }

  return (
    <button className={state} onClick={() => onClick(answer)}>
      {answer}
    </button>
  );
};

export default QuestionButton;
