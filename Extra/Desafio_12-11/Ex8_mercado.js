var values = [1,0,1,1,0];
var valuesValid = [];
var soma = 0;
for (let index = 0; index < values.length; index++){
    if (values[index] > 0){
        valuesValid.push(values[index])
    }else {
        valuesValid.pop();
    }
}
console.log(valuesValid);
for (index = 0; index < valuesValid.length; index++){
    soma = soma + valuesValid[index];

}
console.log(soma);




