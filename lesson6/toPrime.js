//20
/* Task :

Given a List [] of n integers , find minimum number to be 
inserted in a list, so that sum of all elements of list should 
equal the closest prime number .

Notes

List size is at least 2 .

List's numbers will only positives (n > 0) .

Repetition of numbers in the list could occur .

The newer list's sum should equal the closest prime number .

Input >> Output Examples

1- minimumNumber ({3,1,2}) ==> return (1)
Explanation:

Since , the sum of the list's elements equal to (6) , 
the minimum number to be inserted to transform the sum 
to prime number is (1) , which will make the sum of the 
List equal the closest prime number (7) .
2-  minimumNumber ({2,12,8,4,6}) ==> return (5)
Explanation:

Since , the sum of the list's elements equal to (32) , 
the minimum number to be inserted to transform the sum 
to prime number is (5) , which will make the sum of the 
List equal the closest prime number (37) .
3- minimumNumber ({50,39,49,6,17,28}) ==> return (2)
Explanation:

Since , the sum of the list's elements equal to (189) , 
the minimum number to be inserted to transform the sum 
to prime number is (2) , which will make the sum of the 
List equal the closest prime number (191) . 

prime numbers 

1,3,5,7,9,11,13
if bigNum is divisible by any number ... up until bigNum / 2 
 then it is not prime
 + 1
 if bigNum is divisible by any number ... up until bigNum / 2 
 then it is not prime
 +1
 if bigNum is divisible by any number ... up until bigNum / 2 
 then it is not prime
 +1
 if bigNum is divisible by any number ... up until bigNum / 2 
 then it is not prime
 
 
 ...until every number is false


 while (nums <= Math.floor(bigNum / 2) )


 loop

   let count = 2;  count <= Math.floor(bigNum / 2); count++
   bigNum / 2?, 3?, 4?, 5?
    if any number returns true
      bigNum += 1;
      count = 1;
      break;
    else return inputNum - bigNum

 */

/* function minimumNumber(arr) {
  let sum = arr.reduce((accu, num) => accu + num);
  let bigNum = (sum % 2 === 0) ? sum + 1 : sum;

  for (let count = 3; count <= Math.ceil(bigNum / 3); count += 2) {
    console.log(bigNum, count);
    if (bigNum % count === 0) {
      bigNum += 2;
      count = 1;
    }
  }
  return bigNum - sum;
} */

function minimumNumber(arr) {
  let sum = arr.reduce((accu, num) => accu + num);
  let bigNum = (sum % 2 === 0) ? sum + 1 : sum;

  while(!prime(bigNum)){
    bigNum += 1;
  }
  
  return bigNum - sum;


  function prime(num) {
    for (let count = 3; count <= Math.ceil(bigNum / 3); count += 2) {
      console.log(bigNum, count);
      if (bigNum % count === 0) {
        count = 1;
      }
    }
  }
}

console.log(minimumNumber([50,39,49,6,17,28]))// ,2))// ==> return (2)

