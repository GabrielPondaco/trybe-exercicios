const num1 = 10;
const num2 = 20;
const num3 = 30;
if (num1 > num2 && num1 > num3){
    return num1;
}
else if (num2 > num1 && num2 > num3){
    return num2;
}
else if(num3 > num1 && num3 > num2) {
    return num3;
}
else {
    return console.log("Os numeros são iguais.");
}