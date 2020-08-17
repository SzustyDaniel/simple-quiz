import React, { useState } from "react";
import "./GameBoardPage.scss";
import QuestionComponent from "../question-component/Question.component";
import QuestionButton from "../question-button/QuestionButton";
import WrongCount from "../wrong-count-component/WrongCount";
import EndGameComponent from "../end-game-component/EndGameComponent";
import { Game } from "../../../models";

function GameBoardPage() {
  const [game, setGame] = useState<Game>();
  const [selectedAnswer, setSelectedAnswer] = useState("");

  function handleEndGame(event: any) {
    console.log("End game pressed");
  }

  function handleUserSelection(selection: string) {
    if (selectedAnswer === "") {
      setSelectedAnswer(selection);
    }
  }

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
        <EndGameComponent onEndGame={handleEndGame} />
      </section>
      <section className='wrong-count-section'>
        <WrongCount wrongAnswersCount={0} />
      </section>
      <section className='answers-section'>
        {["Jordan", "Qubec", "Detroit", "Paris"].map((answer, index) => (
          <QuestionButton
            key={index}
            answer={answer}
            isCorrectAnswer={answer === "Jordan"}
            userSelectedAnAnswer={selectedAnswer !== ""}
            selectedAnswer={selectedAnswer}
            onClick={handleUserSelection}
          />
        ))}
      </section>
    </div>
  );
}

export default GameBoardPage;
