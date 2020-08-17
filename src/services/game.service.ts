import { Game, CreateGameValues, Difficulty } from "../models";

export class GameService {
  public static createGame(values: CreateGameValues) {
    switch (values.gameDifficulty) {
      case Difficulty.Easy:
        return GameService.createEasyGame(values);
      case Difficulty.Medium:
        return GameService.createMediumGame(values);
      case Difficulty.Hard:
        return GameService.createHardGame(values);
    }
  }

  private static createEasyGame(values: CreateGameValues): Game {
    throw new Error("Not implemented");
  }

  private static createMediumGame(values: CreateGameValues): Game {
    throw new Error("Not implemented");
  }

  private static createHardGame(values: CreateGameValues): Game {
    throw new Error("Not implemented");
  }
}
