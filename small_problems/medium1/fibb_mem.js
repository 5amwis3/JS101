/*
input: num
output: num

Obj to store

function (nthPlace)
  if nthPlace < 3 return 1
  else if obj has store nthPlace
    return obj[nthPlace]
  else assign obj[nthPlace] ...
  return obj[nthPlace]



let fibonacciNums = {
  1: 1,
  2: 1
}

function fibonacci(nth) {
    if (nth <= 2) {
    return fibonacciNums[nth];
  }

  return fibonacciNums[nth] = fibonacci(nth  - 1) + fibonacciNums[nth - 2]
}

console.log(fibonacci(90));
 */

/*
start with initial fibs in obj
  fibNums obj with {1: 1, 2: 1}

function(nthPlace)
  if it's not in fibNums
    add it to the obj

return obj[nthPlace] fibonacci number;
*/

let fibNums = {
  1: 1,
  2: 1,
};

function fibs(nthPlace) {
  if(!fibNums[nthPlace]) {
    fibNums[nthPlace] = fibs(nthPlace -1) + fibs(nthPlace - 2);
  }
  return fibNums[nthPlace];
}

console.log(fibs(3));
console.log(fibs(4));
console.log(fibs(7));