import { Game, CreateGameValues, Difficulty, Player } from "../models";
import * as questionsService from "./questions.service";
import { platform } from "os";

export function createGame(values: CreateGameValues) {
  switch (values.gameDifficulty) {
    case Difficulty.Easy:
      return createEasyGame(values);
    case Difficulty.Medium:
      return createMediumGame(values);
    case Difficulty.Hard:
      return createHardGame(values);
  }
}

function createEasyGame(values: CreateGameValues): Promise<Game> {
  return questionsService
    .getQuestions(10, values.gameCategory)
    .then((questions) => {
      return new Game(
        0,
        values.gameCategory,
        new Player(0, values.playerName, 0), // TODO change how a player is given.
        values.gameDifficulty,
        0,
        0,
        0,
        4,
        false,
        questions
      );
    });
}

function createMediumGame(values: CreateGameValues): Promise<Game> {
  return questionsService
    .getQuestions(15, values.gameCategory)
    .then((questions) => {
      return new Game(
        0,
        values.gameCategory,
        new Player(0, values.playerName, 0), // TODO change how a player is given.
        values.gameDifficulty,
        0,
        0,
        0,
        2,
        false,
        questions
      );
    });
}

function createHardGame(values: CreateGameValues): Promise<Game> {
  return questionsService
    .getQuestions(20, values.gameCategory)
    .then((questions) => {
      return new Game(
        0,
        values.gameCategory,
        new Player(0, values.playerName, 0), // TODO change how a player is given.
        values.gameDifficulty,
        0,
        0,
        0,
        1,
        false,
        questions
      );
    });
}
