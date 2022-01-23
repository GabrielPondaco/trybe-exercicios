// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'apple', 'lime'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['orange', 'grape', 'melon'];

const fruitSalad = (fruit, additional) => {
  return [...fruit,'watermelon' ,...additional, 'pineaple'];
};

console.log(fruitSalad(specialFruit, additionalItens));