//!---------------------- exercicio de palindromo----------------
function isPalindromo (palavra){
  let testaPalindromo = '';
  console.log(palavra);
  testaPalindromo = palavra.split('',palavra.length).reverse().join('');
  console.log(testaPalindromo);
  if (testaPalindromo === palavra){
    return true;
  }
  else {
    return false;
  }
}


let palavra = "araras";
if (isPalindromo(palavra)){
  console.log("Eh palindromo viu");
}
else {
  console.log("Eh nada");
}

//--------------------------indice do maior---------------------
function indiceMaior (array) {
  let maior = array[0];
  for (let number of array){
    if (number > maior){
      maior = number;
    }
  }

  return array.indexOf(maior);
}
let array = [2, 3, 6, 7, 10, 1];
console.log(indiceMaior(array));

//----------------------------indice do menor----------------------
function indiceMenor (array) {
  let menor = array[0];
  for (let number of array){
    if (number < menor){
      menor = number;
    }
  }

  return array.indexOf(menor);
}
let array = [2, 4, 6, 7, 10, 0, -3];
console.log(indiceMenor(array));

//-----------------------maior nome----------------------------------
function maiorNome (array) {
  let maior = array[0];
  for (let nome of array){
    if (nome.length > maior.length){
      maior = nome;
    }
  }

  return maior;
}
let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 
console.log(maiorNome(array));

//----------------------mais se repete--------------------------------
//dificil demais sô

//---------------------somatório de 1 até N---------------------------
function somatorio (limite) {
  let sum = 0;
  for (let index = 1; index <= limite; index++){
    sum += index;
  }
  return sum;
}

console.log(somatorio(4));

//-----------------------verifica fim da palavra----------------------
function verificaFimPalavra (palavra, fim) {

  return palavra.endsWith(fim);
}
console.log(verificaFimPalavra('joaofernando', 'fernan'));
console.log(verificaFimPalavra('trybe','be'));


// function countItems(arr) {
//   const countMap = Object.create(null);

//   for (const element of arr) {
//     // Basicamente, estamos dizendo: atribua à `countMap[element]` o valor
//     // atual (ou zero, caso não existir) somado ao número 1.
//     countMap[element] = (countMap[element] || 0) + 1;
//   }
  
//   return countMap;
// }

// const arr = ['1', '2', '4', '2', '2', '3', '3'];
// console.log(countItems(arr));


