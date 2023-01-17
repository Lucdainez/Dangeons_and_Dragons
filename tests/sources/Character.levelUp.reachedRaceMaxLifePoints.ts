import Character from '../../src/Character';

const isValidLifePoints = (prevLifePoints: number, currLifePoints: number, raceMaxLifePoints: number): boolean => {
  return (prevLifePoints < currLifePoints) || (prevLifePoints === currLifePoints && currLifePoints === raceMaxLifePoints);
};

const result = () => {
  let res = true;
  const char = new Character('');
  for (let i = 0; i < 100; i++) {
    const prevLifePoints = char.lifePoints
    char.levelUp();
    const isValid = isValidLifePoints(prevLifePoints, char.lifePoints, char.race.maxLifePoints);
    
    if(!isValid) {
      return false;
    };
  }
  return res;
};
