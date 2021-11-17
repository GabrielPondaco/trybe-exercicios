var numeros = [];
var num1 = 44;
var proximo = 0;
numeros.push(num1);

function taNaLista(numero){
    for(let index = 0; index < numeros.length-1; index++){
        if (numeros[index] == numero ){
            return true;
        }
        return false;
    }


}
function divideNum(num1){
        num1 = num1.toString().split('');
        proximo = (parseInt(num1[0])**2) + (parseInt(num1[1])**2);
        numeros.push(proximo);
        if (taNaLista(proximo) == true || proximo == 1){
            console.log("ACABOU!!");
        }else if (taNaLista(proximo) == false){
            divideNum(proximo);
        }
        
}

divideNum(44);
console.log(numeros)

