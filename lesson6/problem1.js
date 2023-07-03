

// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

// Examples:



console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]


/* 

attempt 3

/* 
20 min
Understand the Problem

  Input: array
  Output: array

  Main Idea:
    count unique values that are smaller than each number

Examples: 
  ([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
    8: 0,1,1,2
    selected: 0, 1, 2

Structuring the Algorithm

  Primary structure: str, arr, obj...

  Mental Model: 
    look at a single number
      iterate though entire array
        add point if...
          smaller & unique

  Algorithm: 
    iterate through given array transforming elements

      variable seen = array
      variable count = 0

      for each element...
        iterate through the entire array to compare
        if number is seen... skip
        if number smaller... add 1 to count
        add number to seen

      return count;

    
*/

function smallerNumbersThanCurrent3(arr) {
  return arr.map(compareN => {
    let seen = [];
    let count = 0;

    for (let idx = 0; idx < arr.length; idx++) {
      let eachNum = arr[idx]

      if (seen.includes(eachNum)) continue;
      if (compareN > eachNum) count += 1;
      seen.push(eachNum);
    }

    return count;
  })
}





/*
ATTEMPT 2
9 min

transform the array
  each element transformed into the number of other small numbers it contains
  
map to iterate and transform
  seen numbers = []
  reduce to get the amount of other numbers
    if not seen and smaller... accu + 1

*/

function smallerNumbersThanCurrent2(arr) {
  return arr.map(element => {
    let seen = [];

    return arr.reduce((accu, curr) => {
      if (!seen.includes(curr) && (curr < element)) {
        seen.push(curr);
        return accu + 1;
      }
      return accu;
    }, 0)
  }) 
}


/*
ATTEMPT 1
// finished in 19:52 
look at each number (map)
 compare every other number to it
  add to checked arr
 if it is smaller and is not in checked
  add 1
 else 
  nothing
return new array with new values indicating how many smaller numbers there were
*/


/* function smallerNumbersThanCurrent(arr) {
  return arr.map(num => {
    let checked = [];
    let sum = 0;

    for (let idx = 0; idx < arr.length; idx++) {
      if (num > arr[idx] && !checked.includes(arr[idx])) {
        sum += 1;
      }
      checked.push(arr[idx]);
    }
    return sum;
  });

} */






/* 
11  min
// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.


input arr
output arr



for each number ( map )
  iterate through array
    find out how many numbers are smaller than it 
    (that do not equal same idx)
    once we have that number return it as the new number for return arr
  filter out the numbers that are smaller and return the length

// Examples:


*/

function smallerNumbersThanCurrent0(arr) {
  return arr.map((num) => {
    let seen = [];

    return arr.filter((num2) => {
      let result;
      result = !!(num2 < num && !seen.includes(num2))
      seen.push(num2);
      return result;

    }).length;

  });
}




/* 

*/