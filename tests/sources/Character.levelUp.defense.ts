import Character from '../../src/Character';

const isValidDefense = (prevDefense: number, currDefense: number): boolean => {  
  return prevDefense < currDefense && prevDefense + 10 >= currDefense;
};

const result = () => {
  let res = true;
  const char = new Character('');
  for (let i = 0; i < 100; i++) {
    const prevDefense = char.defense
    char.levelUp();
    const isValid = isValidDefense(prevDefense, char.defense);
    
    if(!isValid) {
      return false;
    };
  }
  return res;
};
