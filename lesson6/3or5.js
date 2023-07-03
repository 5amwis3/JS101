//10 min
/* If we list all the natural numbers 
below 10 that are multiples of 3 or 5, 
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns 
the sum of all the multiples of 3 or 5 
below the number passed in. 
Additionally, if the number is negative, 
return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, 
only count it once. 
if multiple of 3 or 5 add to array
find sum of array
*/

function solution(number){
  if (number < 0) return 0;
  let sum = 0;
  for (let num = 1; num < number; num++) {
    if (num % 3 === 0 || num % 5 === 0) {
      sum += num;
    }
  }
  return sum;
}

console.log(solution(2))