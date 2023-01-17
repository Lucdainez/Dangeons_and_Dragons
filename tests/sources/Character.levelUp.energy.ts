import Character from '../../src/Character';

const isValidEnergy = (currEnergyAmount: number): boolean => {  
  return (currEnergyAmount === 10);
};

const result = () => {
  let res = true;
  const char = new Character('');
  for (let i = 0; i < 100; i++) {
    char.levelUp();
    const isValid = isValidEnergy(char.energy.amount);

    if(!isValid) {
      return false;
    };
  }
  return res;
};
