import Character from '../../src/Character';

const isValidStrength = (prevStrength: number, currStrength: number): boolean => {
  return prevStrength < currStrength && prevStrength + 10 >= currStrength;
};

const result = () => {
  let res = true;
  const char = new Character('');
  for (let i = 0; i < 100; i++) {
    const prevStrength = char.strength;
    char.levelUp();
    const isValid = isValidStrength(prevStrength, char.strength);
    
    if(!isValid) {
      return false;
    };
  }
  return res;
};
