import { Question } from "./question";
import { Player } from "./player";
import { Category, Difficulty } from "./enums";

export class Game {
  public readonly BASE_ANSWER_SCORE = 1000;

  constructor(
    private _id: number,
    private _category: Category,
    private _player: Player,
    private _difficulty: Difficulty,
    private _totalScore: number = 0,
    private _wrongAnswersCount: number = 0,
    private _totalCorrectAnswers: number = 0,
    private _wrongAnswersAllowed: number = 3,
    private _questions: Question[]
  ) {}

  public get id(): number {
    return this._id;
  }

  public get category(): Category {
    return this._category;
  }

  public get player(): Player {
    return this._player;
  }

  public get difficulty(): Difficulty {
    return this._difficulty;
  }

  public get totalScore(): number {
    return this._totalScore;
  }

  public get wrongAnswersCount(): number {
    return this._wrongAnswersCount;
  }

  public get totalCorrectAnswers(): number {
    return this._totalCorrectAnswers;
  }

  public set totalCorrectAnswers(v: number) {
    this._totalCorrectAnswers = v;
  }

  public get wrongAnswersAllowed(): number {
    return this._wrongAnswersAllowed;
  }

  public get questions(): Question[] {
    return this._questions;
  }

  public isWrongAnswersExceedsAllowed(): boolean {
    return this.wrongAnswersCount > this.wrongAnswersAllowed;
  }

  // base formula for calculating the score of a game is (total correct answers * difficulty multiplier * base answer score)
  public calculateTotalScore() {
    let answersMultiplier: number;

    switch (this.difficulty) {
      case Difficulty.Easy:
        answersMultiplier = 1;
        break;
      case Difficulty.Medium:
        answersMultiplier = 1.5;
        break;
      case Difficulty.Hard:
        answersMultiplier = 3;
        break;
    }

    this._totalScore =
      this.totalCorrectAnswers * answersMultiplier * this.BASE_ANSWER_SCORE;
  }

  public toLogString(): string {
    return `Game stats: 
    Id: ${this.id}
    category: ${Category[this.category]}
    difficulty: ${Difficulty[this.difficulty]}
    player: id- ${this.player.id} name - ${this.player.name}
    wrong answers count: ${this.wrongAnswersCount}
    correct answers count: ${this.totalCorrectAnswers}
    total score: ${this.totalScore}
    questions: ${this.questions.map((q) => q.toLogString())}`;
  }
}
