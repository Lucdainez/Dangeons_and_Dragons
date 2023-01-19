import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player1: Fighter;
  private _monsters: (Fighter | SimpleFighter)[];

  constructor(
    player: Fighter,
    monsters: (Fighter | SimpleFighter)[],
  ) {
    super(player);
    this._player1 = player;
    this._monsters = monsters;
  }

  public fight(): number {
    const player1 = this._player1;
    const monsters = this._monsters;
    monsters.forEach((monster) => {
      while (player1.lifePoints > 0 && monsters
        .some((beast) => beast.lifePoints > 0)) {
        monster.receiveDamage(player1.strength);
        player1.receiveDamage(monster.strength);
      }
    });
    return super.fight();
  }
}