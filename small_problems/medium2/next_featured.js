/*
A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. 
For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

Examples:

Copy Code
featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

is an odd number 
that is a multiple of 7, 
with all of its digits occurring exactly once each. 

input num
output next num

if num is => 9876543201 return "There is no possible number that fulfills those requirements."
while even or while num occurs more than once || not divisible by 7
  num += 1;

function occursmorethanonce
  num to string
  loop startidx = 0
    loop compare eleIdx === start + 1
      if start === ele return false

return num
*/

function featured(num) {
  if (num >= 9876543201) return "There is no possible number that fulfills those requirements.";

  do {
    num += 1;
  } while (!(num % 2 === 1 && num % 7 === 0 && occursOnlyOnce(num)));

  function occursOnlyOnce(num) {
    str = String(num);
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        if(str[i] === str[j]) return false;
      }
    }
    return true;
  }

  return num;
}
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
