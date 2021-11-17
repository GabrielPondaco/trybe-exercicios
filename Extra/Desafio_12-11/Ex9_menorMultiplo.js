var roof = 11;
var divisivel = false;
var contagem = 0;
for (var numero = 1; divisivel == false; numero++){
    contagem = 0;
    for (var index = 1; index <= roof; index++){
        if (numero%index == 0){
        //console.log("dividiu por " + index);
        contagem++;
        
        }
    }
    if (contagem == roof){
            divisivel = true;
    }
}
console.log(divisivel);
console.log(numero-1);