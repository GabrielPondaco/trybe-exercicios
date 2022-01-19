const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const dragonDmg = () => (Math.random() * (dragon.strength - 15) + 15).toFixed(0);

// 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const warriorDmg = () => (Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength).toFixed(0);
// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
const mageDmgMP = () => {
  const mageTurn = {
    mana: 0,
    damage: 0,
  };
  if (mage.mana < 15) {
    mageTurn.damage = 'Não possui mana suficiente';
    return mageTurn;
  }
  mageTurn.mana = 15,
  mageTurn.damage = ((Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence).toFixed(0));
  return mageTurn;
}

console.log(dragonDmg());
console.log(warriorDmg());
console.log(mageDmgMP());

// //------------------
// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const respostas = (gabarito, respostas, func) => {
  let resultado = `Nota final do aluno ; ${func(gabarito, respostas)}`;
  
  return resultado;
}
const checarResposta = (array1,array2) => {
  let certas = 0;
  for (let i = 0; i < array1.length; i+=1) {
    if (array1[i] === array2[i] && array2[i] !== 'N.A') {
      certas += 1;
    }
    if (array1[i] !== array2[i] && array2[i] !== 'N.A') {
      certas -= 0.5
    }
  }
  return certas;
}
console.log(respostas(RIGHT_ANSWERS, STUDENT_ANSWERS, checarResposta))