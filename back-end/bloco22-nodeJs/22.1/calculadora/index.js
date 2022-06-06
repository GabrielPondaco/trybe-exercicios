const readline = require('readline-sync');

const number1 = readline.questionInt('Digite o primeiro número: ');
const number2 = readline.questionInt('Digite o segundo número: ');
const operator = readline.question('Digite a operação desejada ( +, -, *, /):');
let result = 0;
switch (operator) {
  case '+':
    result = number1 + number2;
    break;
  case '-':
    result = number1 - number2;
    break;
  case '*':
    result = number1 * number2;
    break;
  case '/':
    result = number1 / number2;
    break;
}

console.log(`O resultado de ${number1} ${operator} ${number2} eh ${result}`);