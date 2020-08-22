import React from "react";
import "./Question.component.scss";
import * as he from "he";

type QuestionProps = {
  question: string;
};

const QuestionComponent = ({ question }: QuestionProps) => {
  return <p className='question-text'>{he.decode(question)}</p>;
};

export default QuestionComponent;
