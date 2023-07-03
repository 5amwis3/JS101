//8 min
/* Complete the greatestProduct method so that it'll 
find the greatest product of five consecutive digits in 
the given string of digits.

For example:

greatestProduct("123834539327238239583") // should return 3240
The input string always has more than five digits.

Adapted from Project Euler. 

iterate through grabbing section of 5 at a time
find the product of the section
if it is greater than largest assign to largest
return largest*/

function greatestProduct(str) {
  let largest = 0;

  for (let idx = 0; idx < str.length - 4; idx++) {
    let group = str.slice(idx, idx + 5);
    let product = group.split('').reduce((accu, num) => {
      return accu * parseInt(num, 10);
    });
    if (product > largest) largest = product;
  }
  return largest;
}
greatestProduct("123834539327238239583")