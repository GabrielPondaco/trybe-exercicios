// Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}
testingScope(true);

// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const compara = (a, b) => a-b;
oddsAndEvens.sort(compara)
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

//solução 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
console.log(`Os números ${oddsAndEvens.sort((a,b) => a-b)} se encontram ordenados de forma crescente!`);

// Crie uma função que receba um número e retorne seu fatorial.
const fat = (num) => {
  let fat = num;
  while (num > 1) {
    num -= 1;
    fat = fat * (num);
  }
  return fat;
}
console.log(fat(4));
// function fatorial(x)
// {
  //  if(x<=1)
  //   return 1;
  //  else
  //   return x * fatorial(x-1);
  // }
function fatorial(x)
{
  return ((x <= 1) ? 1 : x * fatorial(x-1))
}


const fatorial = x => ((x <= 1) ? 1 : x * fatorial(x-1))
console.log(fatorial(4));

//Crie uma função que receba uma frase e retorne qual a maior palavra.
const longestWord = p => {
  let longestWord = '';
  for (let word of p.split(' ')) {
    word.length > longestWord.length ? longestWord = word : '';
  }
  return longestWord;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.
const array = ["Android", "iOS", "Architecture", "Teach", "Run"];
const trocaX = (string) => `Tryber ${string} aqui!`;
