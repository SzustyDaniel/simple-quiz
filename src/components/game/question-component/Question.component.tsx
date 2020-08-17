import React from "react";
import "./Question.component.scss";
type QuestionProps = {
  question: string;
};

const QuestionComponent = ({ question }: QuestionProps) => {
  return (
    <section>
      <p>{question}</p>
    </section>
  );
};

export default QuestionComponent;
