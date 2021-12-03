function identificaRomano (numero) {
  let valor = 0;
  switch (numero.toUpperCase()){
    case 'I':
      valor = 1;
      break;
    
    case 'V':
      valor = 5;
      break;
    
    case 'X':
      valor = 10;
      break;
    
    case 'L':
      valor = 50;
      break;
    
    case 'C':
      valor = 100;
      break;
    
    case 'D':
      valor = 500;
      break;

    case 'M':
      valor = 1000;
      break;

    default:
      valor = null;
      break;
    
  }
  return valor;
}

function transformaArray (array) {
  let arrayNumeros = [];
  for (let index of array) {
    if (typeof(identificaRomano) == null){
      return 
    }
    else {
      arrayNumeros.push(identificaRomano(index));
    }
  }

  return arrayNumeros;
}

function calculaRomano (array) {
  let sum = 0;
  let arrayNumeros = [];
  arrayNumeros = transformaArray(array);
  if (arrayNumeros.length <= 0){
    return 'numeros romanos invalidos!';
  }
  else if (arrayNumeros.length === 1){
    sum = arrayNumeros[0];
    return sum;
  }
  else {
    for (let index = 0; index < arrayNumeros.length; index+=1){
      if (arrayNumeros[index] >= arrayNumeros[index+1] || index === arrayNumeros.length-1){
        sum = sum + arrayNumeros[index];
      }
      if (arrayNumeros[index] < arrayNumeros[index+1]){
        sum = sum - arrayNumeros[index];
      }
    }
    return sum;
  }
  



}
let stringNumeros = 'XI';

console.log(calculaRomano(stringNumeros));
//console.log(calculaRomano(stringNumeros));