/*Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer. Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato: { area: 0, perimetro: 0 }. 
Fórmulas: 
perimetro = (2*base) + (2*altura)
area = base * altura (editado)*/

function calculaAreaPerimetro (base, altura) {
  let objeto = {
    perimetro: (2*base) + (2*altura),
    area: base * altura
  }

  return objeto
}

console.log("aulas" + calculaAreaPerimetro(2,4));



Exercício 2 - Crie uma função que, dado um array de números inteiros, retorne a quantidade de números pares e ímpares no formato: { pares: 0, ímpares: 0 }

function quantidadeParesImpares (array) {
  let objeto = {
    pares: 0,
    impares: 0,
  }
  for (let numero of array){
    if (numero%2 === 0){
      objeto.pares +=1;
    }
    else {
      objeto.impares += 1;
    }
  }

  return objeto;

}
let array = [2, 8, 10, 5];
console.log(quantidadeParesImpares(array));