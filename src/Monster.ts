import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  public get strength(): number {
    return this._strength;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public receiveDamage(amount: number): number {
    this._lifePoints = amount - this._lifePoints;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}