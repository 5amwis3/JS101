/* calculates and returns first number with x amount of fibonacci digits

function
arr to hold two spots of fib
loop through and check length of newly added number to array
  if it is the correct amount of digits, return it

*/

function fibbLength(num) {
  let arr = [1n, 1n];
  let count = 2n;

  while((String(arr[1]).length) < num) {
    arr = [arr[1], arr[0] + arr[1]];
    count += 1n;
  }

  return count;
}

console.log(fibbLength(2));


