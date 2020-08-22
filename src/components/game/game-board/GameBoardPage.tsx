import React, { useState, useEffect } from "react";
import "./GameBoardPage.scss";
import QuestionComponent from "../question-component/Question.component";
import QuestionButton from "../question-button/QuestionButton";
import WrongCount from "../wrong-count-component/WrongCount";
import EndGameComponent from "../end-game-component/EndGameComponent";
import { Game, Question } from "../../../models";
import gameStore from "../../../stores/game.store";
import { cloneDeep } from "lodash";
import {
  endCurrentGame,
  updateCurrentGame,
} from "../../../actions/gameActions";

function ShuffleChoices(question: Question) {
  let shuffledQuestion = cloneDeep<Question>(question);
  if (shuffledQuestion) {
    for (let index = shuffledQuestion.choices.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * index + 1);
      [
        shuffledQuestion.choices[index],
        shuffledQuestion.choices[randomIndex],
      ] = [
        shuffledQuestion.choices[randomIndex],
        shuffledQuestion.choices[index],
      ];
    }
  } else {
    shuffledQuestion = question;
  }

  return shuffledQuestion;
}

function GameBoardPage(props: any) {
  const [game, setGame] = useState<Game>();
  const [currentQuestion, setCurrentQuestion] = useState<Question>();
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [gameStateStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (
      gameStateStarted === false &&
      gameStore.getGame() &&
      !gameStore.getGame()?.isGameOver
    ) {
      setGame(gameStore.getGame());
      setQuestionIndex(0);
      if (game) {
        setCurrentQuestion(ShuffleChoices(game.questions[questionIndex]));
      }
    } else if (gameStateStarted === false) {
      props.history.push("/game/create");
    }
  }, [game, gameStateStarted, props.history, questionIndex]);

  function handleEndGame(event: any) {
    props.history.push("/");
    endCurrentGame();
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
        updateCurrentGame(clonedGame);

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

  let questionComp = currentQuestion ? (
    <QuestionComponent question={currentQuestion.question} />
  ) : (
    <></>
  );

  return (
    <div className='game-container'>
      <section className='current-question-section'>{questionComp}</section>
      <section className='end-game-section'>
        <EndGameComponent onEndGame={handleEndGame} />
      </section>
      <section className='wrong-count-section'>
        <WrongCount wrongAnswersCount={game?.wrongAnswersCount || 0} />
      </section>
      <section className='answers-section'>
        {currentQuestion?.choices.sort().map((answer, index) => (
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
