/*
P
Create a simple tip calculator. 
The program should prompt for a bill amount and a tip rate. 
The program must compute the tip, and then log both the tip and the total amount of the bill to the console. 
You can ignore input validation and assume that the user will enter numbers.
E
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
D

A
C
*/

let ask = require('readline-sync');

let bill = parseFloat(ask.question('What is the bill? '));
let tipRate = parseFloat(ask.question('what is the tip percentage? '));

let tip = (bill * tipRate / 100);
let total = (bill + tip);


console.log(`The tip is ${tip.toFixed(2)}\nThe total is ${total.toFixed(2)}`);
