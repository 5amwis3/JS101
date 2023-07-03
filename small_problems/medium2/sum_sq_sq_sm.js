/*
Write a function that computes
the difference between the square of the sum of the first count positive integers
and the sum of the squares of the first count positive integers.

Examples:

Copy Code
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

input num(count)
output num(sum)

define
  sum = 0;
  sqd = 0;
loop count while > 0; -1;
  sum += count;
  sqd += count**2;

return (sum**2) - sqd;
*/

function sumSquareDifference(count) {
  let sum = 0;
  let sqdSum = 0;

  while (count > 0) {
    sum += count;
    sqdSum += count**2;
    count -= 1;
  }

  return (sum**2) - sqdSum;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150