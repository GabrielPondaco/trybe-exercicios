const angulo1 = 10;
const angulo2 = 20;
const angulo3 = 130;
let somaAngulo = 0;
if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
    console.log("algum angulo inválido");
}

else if ((somaAngulo = angulo1 + angulo2 + angulo3) === 180){
    console.log("eh um triangulo");
}
else {
    console.log("num é triangulo");
}