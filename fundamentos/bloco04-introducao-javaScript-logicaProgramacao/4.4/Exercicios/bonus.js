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
    
  }
  return valor;
}

function calculaRomano (romano) {
  let sum = 0;
  
  for (let index)
  if (romano.length <= 0){
    return 'numero inválido';
  }
  else if (romano.length === 1){
    sum = identificaRomano(romano[0]);
  }
  else if (identificaRomano(romano[0]) < identificaRomano(romano[1])){
    sum -= identificaRomano(romano[0]);
  }
  else {
    sum+= identificaRomano(romano[0]);
  }

  return sum;





}
let stringNumeros = 'C';

console.log(calculaRomano(stringNumeros));