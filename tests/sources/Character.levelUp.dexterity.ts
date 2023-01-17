import Character from '../../src/Character';

const isValidDexterity = (prevDexterity: number, currDexterity: number): boolean => {  
  return prevDexterity < currDexterity && prevDexterity + 10 >= currDexterity;
};

const result = () => {
  let res = true;
  const char = new Character('');
  for (let i = 0; i < 100; i++) {
    const prevDexterity = char.dexterity
    char.levelUp();
    const isValid = isValidDexterity(prevDexterity, char.dexterity);
    
    if(!isValid) {
      return false;
    };
  }
  return res;
};
