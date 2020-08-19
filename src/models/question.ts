import { Category } from "./category";

export class Question {
  constructor(
    private _questionString: string,
    private _correctAnswer: string,
    private _possibleChoices: string[],
    private _isCorrect: boolean,
    private _category?: Category | undefined
  ) {}

  public get correctAnswer(): string {
    return this._correctAnswer;
  }

  public get choices(): string[] {
    return this._possibleChoices;
  }

  public get isCorrect(): boolean {
    return this._isCorrect;
  }

  public set isCorrect(v: boolean) {
    this._isCorrect = v;
  }

  public get question(): string {
    return this._questionString;
  }

  public set question(v: string) {
    this._questionString = v;
  }

  public get category(): Category | undefined {
    return this._category;
  }

  public set category(v: Category | undefined) {
    this._category = v;
  }

  public wasSelectedAnswerCorrect(answer: string): boolean {
    return answer === this.correctAnswer;
  }

  public toLogString(): string {
    return `Question details: 
    question: ${this.question}
    correct answer: ${this.correctAnswer}
    possible answers: ${this.choices.map((c) => `${c} `)}
    question category: ${this.category?.name}`;
  }
}
