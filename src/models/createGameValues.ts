import { Difficulty } from "./enums";
import { Category } from "./category";
export interface CreateGameValues {
  playerName: string;
  gameCategory: Category;
  gameDifficulty: Difficulty;
}
