import React from "react";
import "./QuestionButton.scss";

type QuestionButtonProps = {
  answer: string;
  onClick: any;
};

const QuestionButton = ({ answer, onClick }: QuestionButtonProps) => {
  return (
    <button className='question-button' onClick={onClick}>
      {answer}
    </button>
  );
};

export default QuestionButton;
