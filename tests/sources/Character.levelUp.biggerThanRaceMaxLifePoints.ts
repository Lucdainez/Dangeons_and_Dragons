import Character from '../../src/Character';

const isValidLifePoints = (raceMaxLifePoints: number, currLifePoints: number): boolean => {
  return raceMaxLifePoints >= currLifePoints;
};

const result = () => {
  let res = true;
  const char = new Character('');
  for (let i = 0; i < 100; i++) {
    char.levelUp();
    const isValid = isValidLifePoints(char.race.maxLifePoints, char.lifePoints);
    
    if(!isValid) {
      return false;
    };
  }
  return res;
};
