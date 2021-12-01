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


