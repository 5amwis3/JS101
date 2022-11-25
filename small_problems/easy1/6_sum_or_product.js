let ask = require('readline-sync');

let num = 0;
let sumOrProduct = '';

//check for correct input
do{
num = parseInt(ask.question('Please enter an integer greater than 0: '));

sumOrProduct = ask.question('Enter "s" to compute the sum, or "p" to compute the product: ').toLowerCase();

if (!(Number.isInteger(num) && num > 0 && (sumOrProduct === 's'  || sumOrProduct === 'p'))) {
  console.log('Error! Please double check your input and try again!\n')
}
} while (!(Number.isInteger(num) && num > 0 && (sumOrProduct === 's'  || sumOrProduct === 'p')))


function sumFunction(num) {
  if (num > 1) {
  return num + sumFunction(num - 1);
  } else {
    return 1;
  }
}

function productFunction(num) {
  if (num > 1) {
  return num * productFunction(num - 1);
  } else {
    return 1;
  }
}

if (sumOrProduct === 's') {
  console.log(`\nThe sum of the integers between 1 and ${num} is ${sumFunction(num)}`);
} else if (sumOrProduct === 'p') {
  console.log(`\nThe product of the integers between 1 and ${num} is ${productFunction(num)}`);
} else {
  console.log("please make sure you have entered either 's' or 'p' and an integer greater than 0");
}