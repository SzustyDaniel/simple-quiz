export class Player {
  constructor(
    private _id: number,
    private _name: string,
    private _score: number
  ) {}

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get score(): number {
    return this._score;
  }

  public set score(v: number) {
    this._score = v;
  }
}
