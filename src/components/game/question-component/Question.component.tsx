import React from "react";
import "./Question.component.scss";
type QuestionProps = {
  question: string | undefined;
};

const QuestionComponent = ({ question }: QuestionProps) => {
  return <p className='question-text'>{question}</p>;
};

export default QuestionComponent;
