const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
let previousAnswer = [];

//user selects language for entire program
let lang = readline.question("(1) English\n(2) Español\n(3) 中文\n(4) हिन्दी\n");

while (!['1','2','3','4'].includes(lang)) {
  lang = readline.question("=> (1) (2) (3) (4)\n");
}

switch (lang) {
  case '1':
    lang = "en";
    break;
  case '2':
    lang = "es";
    break;
  case '3':
    lang = "zh";
    break;
  case '4':
    lang = "hi";
    break;
}

function prompt(msg, notLangSpecificMsg) {
  let message = MESSAGES[lang][msg];
  if (notLangSpecificMsg === undefined) {
    console.log(`=> ${message}`);
  } else {
    console.log(`=> ${message + notLangSpecificMsg}`);
  }
}

function invalidNumber(num) {
  return num.trim() === '' || Number.isNaN(Number(num));
}

prompt('welcome');

//user can issue another calculation
while (true) {

  prompt('firstNum');
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt('validNumber');
    number1 = readline.question();
  }

  prompt('secondNum');
  let number2 = (readline.question());

  while (invalidNumber(number2)) {
    prompt('validNumber');
    number2 = readline.question();
  }

  prompt('enterOperation');
  let operation = readline.question();

  while (!['1','2','3','4'].includes(operation)) {
    prompt('validOperation');
    operation = readline.question();
  }

  let result;
  switch (operation) {
    case '1':
      result = Number(number1) + Number(number2);
      break;
    case '2':
      result = Number(number1) - Number(number2);
      break;
    case '3':
      result = Number(number1) * Number(number2);
      break;
    case '4':
      result = Number(number1) / Number(number2);
      break;
  }

  console.log(`=> ${result}\n`);

  prompt('tryAgain');
  let repeat = readline.question();

  if (repeat.trim() !== '1' && repeat.trim() !== '(1)') break;

  console.clear();

  //displays answer history
  previousAnswer.unshift(result);
  prompt('previousResult',previousAnswer);
}