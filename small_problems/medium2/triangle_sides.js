/*
A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments and 
returns one of the following four strings representing the triangle's classification:
 'equilateral', 'isosceles', 'scalene', or 'invalid'.

input: 3 numbers as args
output: str ( type of triangle )

Examples:

Copy Code
triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"

model
  check to see if valid
    sum of to shortest is greater than third
  check args to see if numbers match any of the circumstances
  Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.


algorithm
  arr = 1st 2nd 3rd

  longestSideIndex = index of(math.max(1st,2nd,3rd))
  let longest = arr.splice(longestSideIndex, 1)
  if 1st and second <= longest
    return 'invalid'
  if fist === second and second === 3rd
    return 'equilateral'
  if arr[0] === arr [1]
    return 'Isosceles
  else return 'Scalene'

*/

function triangle(num1, num2, num3) {
  let arr = [num1, num2, num3];

  longestSideInd = arr.indexOf(Math.max(num1, num2, num3));
  longest = arr.splice(longestSideInd, 1)[0];

  if ((arr[0] + arr[1]) <= longest) {
    return 'invalid';
  } else if (num1 === num2 && num2 === num3) {
    return 'equilateral';
  } else if (arr[0] === arr[1] || arr[0] === longest || arr[1] === longest) {
    return 'Isosceles';
  } else {
    return 'Scalene';
  }
  
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"

//25