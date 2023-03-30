let age = require('readline-sync').question('What is your age?');
let retire = require('readline-sync').question('At what age would you like to retire?');

let today = new Date;
let year = today.getFullYear();

let yearsLeft = retire - age;
let retireYear = year + yearsLeft;



console.log(`
It's ${year}. You will retire in ${retireYear}. 
You have only ${yearsLeft} years of work to go!\n`);