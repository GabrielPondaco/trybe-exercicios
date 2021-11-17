/*var num1 = 0;
var num2 = 0;
var soma = 0;
var somaReverso = 0;
num1 = 1292;
num2 = parseInt(num1.toString().split('').reverse().join(''));
var soma = num1 + num2;
somaReverso = parseInt(soma.toString().split('').reverse().join(''));

if (soma == somaReverso)
{
    console.log ("eh palindromo!!!");
}else{

}*/


function ehPalindromo (num1){
    let num2 = 0;
    num2 = parseInt(num1.toString().split('').reverse().join(''));
    if (num1 === num2){
        console.log("aehhhh")
        console.log(iteracao);
        return true;
    }
    return somaPalindromo(num1);
}

function somaPalindromo(soma1){
    let soma2 = 0;
    let resultado;
    soma2 = parseInt(soma1.toString().split('').reverse().join(''));
    resultado = soma1 + soma2;
    iteracao++;
    return ehPalindromo(resultado);

}
var iteracao = 0;
somaPalindromo(20);

