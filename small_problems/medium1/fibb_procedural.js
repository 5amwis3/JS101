function fib(num) {
  if(num < 3) return 1;
  let arr = [1,1];
  for(let count = 2; count < num; count++) {
    arr = [arr[1], arr[0] + arr[1]];
  }

  return arr[1];
}

console.log(fib(7));       // 6765