/* PEDAC
P - problem
Write a function that takes one integer argument, 
which may be positive, negative, or zero. 
This method returns true if the number's absolute value is odd. 
You may assume that the argument is a valid integer value.
E - examples
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
D - data structure
input an integer ( +,-,0)
if | integer is odd |, return true
A - algorithm
function inputs number
if | number | is odd, return true
*/
let isOdd = num => Math.abs(num) % 2 === 1;

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true