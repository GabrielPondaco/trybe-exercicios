const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
  const firstDivisible = numbers.find((element) => element % 3 === 0 && element % 5 === 0);
  return firstDivisible;
}

console.log(findDivisibleBy3And5());


const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  const firstName = names.find((element) => element.length > 5);
  return firstName;
}

console.log(findNameWithFiveLetters());


const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.some((element) => element.age >= minimumAge);

console.log(verifyAges(people, 24));

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui
people.sort((a, b) => a.age - b.age);

console.log(people);