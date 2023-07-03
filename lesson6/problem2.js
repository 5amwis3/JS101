// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.





/* 
Understand the Problem

    Input: array ("break down into inputs and outputs")
    Output: num (sum)

    Main Idea:
      find smallest sum of 5 consecutive numbers

Examples implicit rules:
    1. needs to have at least 5 numbers
    2. can be negative

Structuring the Algorithm

    Primary structure: str, ARR, obj...

    Mental Model: (“Just thinking at a high level, to solve this problem I would …”)



      iterate through arr
        grab 5 numbers
        add them
        store it's sum in sum arr
    
      return smallest sum within sum arr


Algorithm: 


  (“That isn’t the result I expected, let’s go back and review the algorithm to see if we need to make 
any changes there first before revising the code.”)

*/

function minimumSum(arr) {
  if (arr.length < 5) return null;
  let sums = [];

  for (let idx = 0; idx <= (arr.length - 5); idx++) {
    let group = arr.slice(idx, idx + 5);
    let sum = group.reduce((sum, num) => num + sum)
    sums.push(sum);
  }

  return Math.min(...sums);
}


console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);









/*
“I’m going to start by breaking this problem down into its inputs and outputs.”

“Just thinking at a high level, to solve this problem I would ….”

“Before I use this method, let me test it out and see if it works the way I think it does.”

“That isn’t the result I expected, let’s go back and review the algorithm to see if we need to make 
any changes there first before revising the code.”
*/

// Examples:

//input: array of numbers
//output: number / null... if < 5 elements in array

/*
check if array has less than 5 elements, return null
take each chunk of 5 numbers and find it's sum and save it
  if the next chunk of 5 numbers is less, save it
return the saved number

*/

// The tests above should each log "true".
/* 
function minimumSum(arr) {
  if (arr.length < 5) return null;

  let savedMinSum = 0;

  for (let idx = 0; idx + 5 <= arr.length; idx++) {
    let sum = arr.slice(idx, idx + 5).reduce((sum, num) => num + sum, 0);
    if (idx === 0) {
      savedMinSum = sum;
    } else {
      if (sum < savedMinSum) savedMinSum = sum;
    }
  }
  return savedMinSum;
} */









// 11 min
// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

/* 
input arr
output num || null (if length < 5)

find the min sum of 5 consecutive num

let smallest sum

iterate through arr grabbing group of 5
  iteration should iterate until <= arr.length - 5
  1,2,3,4,5 arr.slice(idx, idx + 5)
  2,3,4,5,-5  arr.slice(idx, idx + 5)
      
  find sum
    reduce
  if sum < smallestSum, replace smallestSum

return smallestSum
*/

// Examples:

function minimumSum1(arr) {
  if (arr.length < 5) return null;
  let sum = nums => nums.reduce((accu, num) => accu + num);

  let result = arr.reduce((accu, group, idx, arr) => {
    group = arr.slice(idx, idx + 5);
    if (group.length < 5) return accu;

    return accu.concat(sum(group))
  }, []);

  return Math.min(...result)
}



// The tests above should each log "true".