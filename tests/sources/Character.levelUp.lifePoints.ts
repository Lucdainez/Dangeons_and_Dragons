import Character from '../../src/Character';

const isValidLifePoints = (prevLifePoints: number, currLifePoints: number): boolean => {
  return prevLifePoints <= currLifePoints && prevLifePoints + 10 >= currLifePoints;
};

const result = () => {
  let res = true;
  const char = new Character('');
  for (let i = 0; i < 100; i++) {
    const prevLifePoints = char.lifePoints;
    char.levelUp();
    const isValid = isValidLifePoints(prevLifePoints, char.lifePoints);
    
    if(!isValid) {
      return false;
    };
  }
  return res;
};
