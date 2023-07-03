//17 min
// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.
/*
“I’m going to start by breaking this problem down into its inputs and outputs.”

“Just thinking at a high level, to solve this problem I would ….”

“Before I use this method, let me test it out and see if it works the way I think it does.”

“That isn’t the result I expected, let’s go back and review the algorithm to see if we need to make 
any changes there first before revising the code.”
*/

//input array of integers
//ouput array of 2 closest values
//

//sort by value
//compare 2 at a time ( just one loop )
//subtract first number from second, closest it is to zero

// Examples:

function closestNumbers (arr) {
  let sorted = arr.slice().sort((a,b) => a - b);
  let result = [];

  sorted.reduce((closest, num, idx) => {
    let num2 = sorted[idx + 1] || Infinity;
    if (num2 - num < closest) {
      result = [num2, num];
      return num2 - num;
    }
    return closest;
  }, Infinity);

  return result;
}

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]