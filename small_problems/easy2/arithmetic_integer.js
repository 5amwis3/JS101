let ask = require('readline-sync');
let answer = 0;

function prompt(msg) {
  console.log(`==> ${msg}`);
}

let number1 = ask.question('Enter the first number: ');
let number2 = ask.question('Enter the second number: ');
answer = Number(number1) + Number(number2);
prompt(`${number1} + ${number2} = ${answer}`);
answer = number1 - number2;
prompt(`${number1} - ${number2} = ${answer}`);
answer = number1 * number2;
prompt(`${number1} * ${number2} = ${answer}`);
answer = number1 / number2;
prompt(`${number1} / ${number2} = ${answer}`);
answer = number1 % number2;
prompt(`${number1} % ${number2} = ${answer}`);
answer = number1 ** number2;
prompt(`${number1} ** ${number2} = ${answer}`);
