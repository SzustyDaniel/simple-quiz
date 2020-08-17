import React from "react";
import "./GameBoardPage.scss";
import QuestionComponent from "../question-component/Question.component";
import QuestionButton from "../question-button/QuestionButton";
import WrongCount from "../wrong-count-component/WrongCount";
import EndGameComponent from "../end-game-component/EndGameComponent";

function GameBoardPage() {
  return (
    <div className='game-container'>
      <section className='current-question-section'>
        <QuestionComponent
          question={
            "Test for question look, Test for question look, Test for question look,Test for question look ,Test for question look"
          }
        />
      </section>
      <section className='end-game-section'>
        <EndGameComponent />
      </section>
      <section className='wrong-count-section'>
        <WrongCount wrongAnswersCount={4} />
      </section>
      <section className='answers-section'>
        {["Jordan", "Qubec", "Detroit", "Paris"].map((answer, index) => (
          <QuestionButton
            key={index}
            answer={answer}
            onClick={() => console.log(`Clicked ${answer}`)}
          />
        ))}
      </section>
    </div>
  );
}

export default GameBoardPage;
