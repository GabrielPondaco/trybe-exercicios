const newEmployees = () => {
  const employees = {
    id1: createEmail('Pedro Guerra Pondaco'),
    id2: createEmail('Luiza Drumond'),
    id3: createEmail('Carla Paiva'),
  }
  return employees;
};

const createEmail = (name) => ({ nome: name, email: `${name.toLowerCase().split(' ').join('_')}@betrybe.com` });

console.log(Object.values(newEmployees()));

// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const checaNumero = (numero) => numero == (Math.random() * (5 - 1) + 1).toFixed(0) ? true : false;

const sorteio = (numero, checaNumero) => checaNumero(numero) ? `Parabéns você ganhou!` : 'Tente novamente';

console.log(sorteio(5, checaNumero));

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