let age = require('readline-sync').question('What is your age? ');
let retireAge = require('readline-sync').question('At what age would you like to retire? ');
let today = new Date();

let year = today.getFullYear();

console.log(`It's ${year}. you will retire in ${retireAge - age + year}`);
console.log(`You have only ${retireAge - age} years of work to go!`);