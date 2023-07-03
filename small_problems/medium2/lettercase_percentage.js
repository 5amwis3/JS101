/*
Write a function that takes a string and returns an object containing the following
 three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

input str
output obj with properties
  1 percentage of lowercase to fixed 2 decimals
  2 percentage of uppercase to fixed 2 decimals
  3 percentage of charcters neither to fixed 2 decimals


Examples:

Copy Code
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

input string
  define variables
    special
    upper
    lower
  define obj
  
  iterate through str as an array of chars
    if char is special
      special +1
    if upper
      upper +1
    else
      lower + 1

  assign
    obj.uppercase = upper / str.length * 100 to fixed 2 dec
    obj.lowercase = lower / str.length * 100 to fixed 2 dec
    obj.neither = special / str.length * 100 to fixed 2 dec
return obj
*/

// function letterPercentages(str) {
//   let special = 0;
//   let upper = 0;
//   let lower = 0;
//   let obj = {};

//   str.split('').forEach(char => {
//     if (char === char.toUpperCase() && char === char.toLowerCase()){
//       special += 1;
//     } else if (char === char.toUpperCase()) {
//       upper += 1;
//     } else {
//       lower += 1;
//     }
//   })

//   let getPercentage = num => (num / str.length * 100).toFixed(2);

//   obj.uppercase = getPercentage(upper);
//   obj.lowercase = getPercentage(lower);
//   obj.neither = getPercentage(special);

//   console.log(obj);
// }

// letterPercentages('abCdef 123');
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// letterPercentages('AbCd +Ef');
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// letterPercentages('123');
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }





// Write a function that takes a string and returns an object containing the following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

// Examples:

// Copy Code
// letterPercentages('abCdef 123');
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// letterPercentages('AbCd +Ef');
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// letterPercentages('123');
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }



/* 
-- Understand the Problem
    Input: str
    Output: obj

    Main Idea: 

    Rules: obj contains
            % char lowercase
            % char uppercase
            % of neither

-- Structuring the Algorithm
    1. Mental Models:
      * create obj with 3 prop
          upper
          lower
          other
        Increase num by one for each char that fits it's category

      reasign properties to their (string length / value * 100)

    2. Algorithm: 
      * 

*/

function letterPercentages(str) {
  let obj = {lower : 0, upper: 0, other : 0};

  
  [...str].forEach(char => {
  
    if (char >= 'a' && char <= 'z') {
      obj['lower'] += 1;
    } else if (char >= 'A' && char <= 'Z') {
      obj['upper'] += 1;
    } else {
      obj['other'] += 1;
    }
  })


  for (let prop in obj) {
    obj[prop] = (obj[prop] / str.length * 100).toFixed(2) + ' percent';
  }
  
  console.log(obj);
}


letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }