/*
Write a recursive function that computes the nth Fibonacci number, 
where nth is an argument passed to the function.

input: number
output: number 

*/

function fib(num) {
    if(num < 3) return 1;
    return fib(num -1) + fib(num-2);
}

console.log(fib(1));       // 1
console.log(fib(2));       // 1
console.log(fib(3));       // 2
console.log(fib(4));       // 3
console.log(fib(5));       // 5
console.log(fib(12));      // 144
console.log(fib(44));      // 6765


//                                                      sum(5)
//                                                                          
//                      sum(4)                        =                            sum(3)
//      sum(3)            +               sum(2)                              sum(2) + sum(1)
//  sum(2) + sum(1)                         $1                                   $1       $1
//      $1       $1              