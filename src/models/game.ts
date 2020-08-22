import { Question } from "./question";
import { Player } from "./player";
import { Category } from "./category";
import { Difficulty } from "./enums";

export class Game {
  public readonly BASE_ANSWER_SCORE = 1000;
  public readonly EASY_MULTIPLIER = 1;
  public readonly MEDIUM_MULTIPLIER = 1.5;
  public readonly HARD_MULTIPLIER = 3;

  constructor(
    private _id: number,
    private _category: Category | undefined,
    private _player: Player,
    private _difficulty: Difficulty,
    private _totalScore: number = 0,
    private _wrongAnswersCount: number = 0,
    private _totalCorrectAnswers: number = 0,
    private _wrongAnswersAllowed: number = 2,
    private _isGameOver: boolean,
    private _questions: Question[]
  ) {}

  public get id(): number {
    return this._id;
  }

  public get isGameOver(): boolean {
    return this._isGameOver;
  }

  public get category(): Category | undefined {
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

  public set wrongAnswersCount(v: number) {
    this._wrongAnswersCount = v;
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

  private isWrongAnswersExceedsAllowed(): boolean {
    return this.wrongAnswersCount > this.wrongAnswersAllowed;
  }

  private areAllQuestionsAnswered(): boolean {
    return (
      this.totalCorrectAnswers + this.wrongAnswersCount ===
      this.questions.length
    );
  }

  // base formula for calculating the score of a game is (total correct answers * difficulty multiplier * base answer score)
  public calculateTotalScore() {
    let answersMultiplier: number;

    switch (this.difficulty) {
      case Difficulty.Easy:
        answersMultiplier = this.EASY_MULTIPLIER;
        break;
      case Difficulty.Medium:
        answersMultiplier = this.MEDIUM_MULTIPLIER;
        break;
      case Difficulty.Hard:
        answersMultiplier = this.HARD_MULTIPLIER;
        break;
    }

    this._totalScore =
      this.totalCorrectAnswers * answersMultiplier * this.BASE_ANSWER_SCORE;
  }

  public checkGameState() {
    this._isGameOver =
      this.isWrongAnswersExceedsAllowed() || this.areAllQuestionsAnswered();
  }

  public toLogString(): string {
    return `Game stats: 
    Id: ${this.id}
    category: ${this.category?.name}
    difficulty: ${Difficulty[this.difficulty]}
    player: id- ${this.player.id} name - ${this.player.name}
    wrong answers count: ${this.wrongAnswersCount}
    correct answers count: ${this.totalCorrectAnswers}
    total score: ${this.totalScore}
    questions: ${this.questions.map((q) => q.toLogString())}`;
  }
}
