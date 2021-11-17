var num1 = 0;
var num2 = 0;
var maior = 0;
var digitos = 2;
for (var i = 1; i.toString().length <= digitos; i++){
    for (var j = 1; j < 100; j++)
    {
        num1 = i*j;
        num2 = num1;
        num1 = num1.toString().split('').reverse().join('');
        if (num1 == num2){

            //console.log("Eh palindromo!!!");
            maior = num2;
        }else{
            //console.log("não eh palindromo!!")
        }
    }



}
console.log(maior);
