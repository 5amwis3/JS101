/* There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique 

find a number that matches another
filter out all of that number
return unique number
if first and last index of number are the same return it
*/

function findUniq(arr) {
return arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num))
}

console.log(findUniq([ 2, 0, 0, 0 ]))