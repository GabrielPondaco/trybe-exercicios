let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*for (let number of numbers){
    console.log(number);
}*/
/*let sum = 0;
for (let number of numbers){
    sum = sum + number;
    console.log(sum);
}*/
/*let media = 0;
let sum = 0;
for (let number of numbers){
    sum = sum + number;
}
media = sum/numbers.length;
console.log(media);
if (media > 20){
    console.log('Valor maior que 20');
}
else {
    console.log('Valor menor ou igual a 20');
}*/

/*let maior = numbers[0];
for (let index = 0; index < numbers.length ; index+= 1){
    if (numbers[index] > maior){
        maior = numbers[index];
    }
}
console.log(maior);*/
/*let impares = 0;
for (let index = 0; index < numbers.length ; index+= 1){
    if (numbers[index] % 2 !== 0){
        impares+= 1;
    }
}
console.log(impares);*/
/*let menor = numbers[0];
for (let index = 0; index < numbers.length ; index+= 1){
    if (numbers[index] < menor){
        menor = numbers[index];
    }
}
console.log(menor);*/

let numeros = [];
for (let index = 0; index < 25; index+= 1){
    numeros[index] = index+1;
    console.log(numeros[index]/2);
}


