/*
Some people believe that Fridays that fall on the 13th day of the month are unlucky days. 
Write a function that takes a year as an argument and returns the number of Friday the 13ths in that year. 
You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. 
You may also assume that the same calendar will remain in use for the foreseeable future.

Examples:

Copy Code
fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

get every day with thirteen in that year by cycling through months.
  add that date to thirteens
check to see if thirteens is a friday


function fridayThe13ths(year) {
  let fri13ths = [];
  
  for (let month = 00; month < 12; month++) {
    fri13ths.push(new Date(year, month, 13));
  }
  
  return fri13ths.filter(day => day.getDay() === 5).length;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2

*/

/*
input array of str letters
output string (missing letter)

loop through entire array
  if anelements code value +1 is not the next element in the array
    return the code value + 1
*/

// function findMissingLetter(array) {
//   for (let idx = 0; idx < array.length - 1; idx++) {
//     let expected = array[idx].charCodeAt(0) + 1;
//     let actual = array[idx + 1].charCodeAt(0);
//     if (expected !== actual) return String.fromCharCode(expected);
//   }
//   return 'Looks Good';
// }

// console.log(findMissingLetter(['a','b','c','d','f']));
// console.log(findMissingLetter(['O','Q','R','S']));








/* 
Some people believe that Fridays that fall on the 13th day of the month are unlucky days. 
Write a function that takes a year as an argument and returns the number of Friday the 13ths in that year. 
You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. 
You may also assume that the same calendar will remain in use for the foreseeable future.

Examples:



-- Understand the Problem
    Input: number
    Output: number

    Main Idea: find # of fri 13ths in given year

    Rules: year is greater than 1752

-- Structuring the Algorithm
    1. Mental Models:
      * input my year
        for each month find out which day friday the 13th is
          put that in an array
        find all of the friday versions of the 13th 
          return that number

    2. Algorithm: 
      * 

*/

function fridayThe13ths(year) {
  let fri13ths = 0;
  for (let month = 0; month < 12; month++) {
  let date = new Date(year, month, 13)
  if (date.getDay() === 5) fri13ths += 1;
  }
  console.log(fri13ths)
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2