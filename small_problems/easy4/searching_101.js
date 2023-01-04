let first = require('readline-sync').question('Enter the 1st number: ');
let second = require('readline-sync').question('Enter the 2nd number: ');
let third = require('readline-sync').question('Enter the 3rd number: ');
let fourth = require('readline-sync').question('Enter the 4th number: ');
let fifth = require('readline-sync').question('Enter the 5th number: ');
let last = require('readline-sync').question('Enter the last number: ');

let resultsArray = [first, second, third, fourth, fifth];

if(resultsArray.includes(last)) {
  console.log(`The number ${last} appears in ${resultsArray.join(',')}.`);
} else {
  console .log(`The number ${last} does not appear in ${resultsArray.join(',')}.`);
}