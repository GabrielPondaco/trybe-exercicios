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

