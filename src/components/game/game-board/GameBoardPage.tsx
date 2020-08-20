import React, { useState, useEffect } from "react";
import "./GameBoardPage.scss";
import QuestionComponent from "../question-component/Question.component";
import QuestionButton from "../question-button/QuestionButton";
import WrongCount from "../wrong-count-component/WrongCount";
import EndGameComponent from "../end-game-component/EndGameComponent";
import { Game, Question, Category } from "../../../models";
import gameStore from "../../../stores/game.store";
import playerStore from "../../../stores/player.store";
import { clone, cloneDeep } from "lodash";

function GameBoardPage(props: any) {
  const [game, setGame] = useState<Game>();
  const [currentQuestion, setCurrentQuestion] = useState<Question>();
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [gameStateStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (gameStateStarted === false) {
      setGame(gameStore.getGame());
      setQuestionIndex(0);
      setCurrentQuestion(game?.questions[questionIndex]);
    }
  });

  function handleEndGame(event: any) {
    props.history.push("/game/end");
  }

  function handleUserSelection(selection: string) {
    if (selectedAnswer === "") {
      setSelectedAnswer(selection);
      setGameStarted(true);
      const clonedGame = cloneDeep<Game | undefined>(game);
      if (clonedGame) {
        if (selection === currentQuestion?.correctAnswer) {
          clonedGame.totalCorrectAnswers += 1;
        } else {
          clonedGame.wrongAnswersCount += 1;
        }

        clonedGame.checkGameState();

        setTimeout(() => {
          if (clonedGame.isGameOver === false) {
            setQuestionIndex(questionIndex + 1);
            setCurrentQuestion(clonedGame.questions[questionIndex + 1]);
            setSelectedAnswer("");
            setGame(clonedGame);
          } else {
            props.history.push("/game/end");
          }
        }, 1000);
      }
    }
  }

  return (
    <div className='game-container'>
      <section className='current-question-section'>
        <QuestionComponent question={currentQuestion?.question} />
      </section>
      <section className='end-game-section'>
        <EndGameComponent onEndGame={handleEndGame} />
      </section>
      <section className='wrong-count-section'>
        <WrongCount wrongAnswersCount={game?.wrongAnswersCount || 0} />
      </section>
      <section className='answers-section'>
        {currentQuestion?.choices.map((answer, index) => (
          <QuestionButton
            key={index}
            answer={answer}
            isCorrectAnswer={answer === currentQuestion.correctAnswer}
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
