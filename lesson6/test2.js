// A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

// NOTE: The largest possible featured number is 9876543201.

/* 
-- Understand the Problem
    Input: number
    Output: number

    Main Idea: find higher featured number

    Rules:  is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. 

-- Structuring the Algorithm
    1. Mental Models: ( Repeating elements | Obj vs Array)
      * get number
        set number as starting point for loop
          if that number is not divisible by 7 continue loop
          if that number is not odd, continue loop
          if all digits occur exactly once, return number

// 
    2. Algorithm (Lang Agnostic | Specific Bounds): 
      * if all digits occur exactly once, return number
         if each number is both the first and last occurence continue
*/

function featured(num) {
  for (let count = num + 1; count <= 9876543201; count++) {
    let str = String(count);
    if (count % 7 !== 0) continue;
    if (count % 2 === 0) continue;
    if (noDoubles(str)) return count;
  }

  return 'No Such Number';
}

function noDoubles(str) {
  return [...str].every((char, idx) => (str.indexOf(char) === idx && str.lastIndexOf(char) === idx))
}


// Examples:

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
// console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."