let salarioBruto = 3000;
let descontaInss = 0;
let descontaIR = 0;
let salarioLiquido = 0;

if (salarioBruto <= 1556.91){
    descontaInss = salarioBruto - (salarioBruto * 0.08);
}
else if (salarioBruto > 1556.95 && salarioBruto <= 2594.92){
    descontaInss = salarioBruto - (salarioBruto * 0.09);
}
else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82){
    descontaInss = salarioBruto - (salarioBruto * 0.11);
}
else {
    descontaInss = salarioBruto - 570.88;
}

if (descontaInss <= 1903.98){
    descontaIR = descontaInss;
}
else if (descontaInss > 1903.99 && descontaInss <= 2826.65) {
    descontaIR = (descontaInss * 0.075) - 142.80;
    salarioLiquido = descontaInss - descontaIR;
}
else if (descontaInss > 2826.65 && descontaInss <= 3751.05) {
    descontaIR = (descontaInss * 0.15) - 354.80;
    salarioLiquido = descontaInss - descontaIR;
}
else if (descontaInss > 3751.05 && descontaInss <= 4664.68) {
    descontaIR = (descontaInss * 0.225) - 636.13;
    salarioLiquido = descontaInss - descontaIR;
}
else {
    descontaIR = (descontaInss * 0.275) - 869.36;
    salarioLiquido = descontaInss - descontaIR;
}



console.log("Salário com o INSS já deduzido é: R$" + descontaInss.toFixed(2)); 
console.log("Valor a se descontar de imposto de renda: R$" + descontaIR.toFixed(2));
console.log("Toma teu resto de dinheiro ai: R$" + salarioLiquido.toFixed(2));