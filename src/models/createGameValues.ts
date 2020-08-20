import { Difficulty } from "./enums";
import { Category } from "./category";
import { Player } from "./player";
export interface CreateGameValues {
  player: Player;
  gameCategory: Category | undefined;
  gameDifficulty: Difficulty;
}
