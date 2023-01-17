describe('07 - Classe Character', () => {
  it('A classe Character existe', () => {
    expect('Character.exists').toCompile();
  });
  it('A classe Character implementa a interface Fighter', () => {
    expect('Character.implements').toCompile();
  });
  it('Um Character possui uma Race', () => {
    expect('Character.race').toCompile();
  });
  it('Um Character possui um Archetype', () => {
    expect('Character.archetype').toCompile();
  });
  it('Um Character possui um atributo lifePoints, que pode ser lido mas não pode ser setado', () => {
    expect('Character.lifePoints').toCompile();
    expect('Character.lifePoints.set').notToCompile();
  });
  it('Um Character possui um atributo strength, que pode ser lido mas não pode ser setado', () => {
    expect('Character.strength').toCompile();
    expect('Character.strength.set').notToCompile();
  });
  it('Um Character possui um atributo defense, que pode ser lido mas não pode ser setado', () => {
    expect('Character.defense').toCompile();
    expect('Character.defense.set').notToCompile();
  });
  it('Um Character possui um atributo energy, que pode ser lido mas não pode ser setado nem ter um de seus valores internos alterados', () => {
    expect('Character.energy').toCompile();
    expect('Character.energy.set').notToCompile();
    expect('Character.energy.alter').toCompileAndBeEqualTo(true);
  });
  it('Um Character possui um atributo dexterity, que pode ser lido mas não pode ser setado', () => {
    expect('Character.dexterity').toCompile();
    expect('Character.dexterity.set').notToCompile();
  });
  it('Um Character ao subir de nível, através do método levelUp, incrementa o atributo STRENGTH no mínimo 1 e no máximo 10 pontos', () => {
    expect('Character.levelUp.strength').toCompileAndBeEqualTo(true);
  });

  it('Um Character ao subir de nível, através do método levelUp, atualiza o atributo ENERGY.AMOUNT para valor igual a 10)', () => {
    expect('Character.levelUp.energy').toCompileAndBeEqualTo(true);
  });

  it('Um Character ao subir de nível, através do método levelUp, incrementa o atributo DEXTERITY no mínimo 1 e no máximo 10 pontos', () => {
    expect('Character.levelUp.dexterity').toCompileAndBeEqualTo(true);
  });

  it('Um Character ao subir de nível, através do método levelUp, incrementa o atributo DEFENSE no mínimo 1 e no máximo 10 pontos', () => {
    expect('Character.levelUp.defense').toCompileAndBeEqualTo(true);
  });

  it('Um Character ao subir de nível, através do método levelUp, incrementa o atributo LIFE POINTS no mínimo 1 e no máximo 10 pontos', () => {
    expect('Character.levelUp.lifePoints').toCompileAndBeEqualTo(true);
  })

  it('Um Character ao subir de nível, através do método levelUp, não poderá ter o valor do seu lifePoints maior que o valor do maxLifePoints da Race', () => {
    expect('Character.levelUp.biggerThanRaceMaxLifePoints').toCompileAndBeEqualTo(true);
  })

  it('Um Character ao subir de nível, através do método levelUp, não terá o valor do seu lifePoints modificado caso este valor seja igual ao valor do maxLifePoints da Race', () => {
    expect('Character.levelUp.reachedRaceMaxLifePoints').toCompileAndBeEqualTo(true);
  })

  it('Um Character pode receber danos através do método receiveDamage, fazendo com que seus lifePoints caiam entre o valor do parâmetro attackPoints e este mesmo valor decrescido da defense do Character (com o limite inferior de 0), e o receiveDamage retorna os lifePoints atuais do Character, devendo retornar -1 caso os lifePoints tenham chegado a 0 ou menos', () => {
    expect('Character.receiveDamage').toCompileAndBeEqualTo(true);
  });
  
  it('Um Character pode atacar outro Character, e o outro Character receberá dano entre o valor do atributo strength do Character que ataca e este valor decrescido do valor do atributo defense do Character que defende', () => {
    expect('Character.attack').toCompileAndBeEqualTo(true);
  });
});
