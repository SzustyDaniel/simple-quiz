import { Category, Difficulty } from "./enums";

export interface CreateGameValues {
  playerName: string;
  gameCategory: Category;
  gameDifficulty: Difficulty;
}
