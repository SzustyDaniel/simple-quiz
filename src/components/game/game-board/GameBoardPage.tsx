import React, { useState } from "react";
import "./GameBoard.scss";
import { Game } from "../../../models";
import QuestionComponent from "../question-component/Question.component";
import QuestionButton from "../question-button/QuestionButton";
import WrongCount from "../wrong-count-component/WrongCount";
import EndGameComponent from "../end-game-component/EndGameComponent";

function GameBoardPage() {
  return (
    <div className='game-container'>
      <QuestionComponent question={"Test for question look"} />
      <EndGameComponent />
      <WrongCount wrongAnswersCount={1} />
      <QuestionButton
        onClick={() => console.log("clicked button")}
        answer={"test"}
      />
    </div>
  );
}

export default GameBoardPage;
