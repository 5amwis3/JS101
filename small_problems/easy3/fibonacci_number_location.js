function findFibonacciIndexByLength(targetLength) {
  let fibs = [1,1];

  while (String(fibs[fibs.length -1]).length < targetLength) {
    fibs.push(BigInt(fibs[fibs.length -2]) + BigInt(fibs[fibs.length -1]));
  }
  return fibs.length;
}

console.log(findFibonacciIndexByLength(2n));
console.log(findFibonacciIndexByLength(3n));
console.log(findFibonacciIndexByLength(10n));
console.log(findFibonacciIndexByLength(16n));
console.log(findFibonacciIndexByLength(100n));
console.log(findFibonacciIndexByLength(1000n));