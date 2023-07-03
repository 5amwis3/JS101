/* Given a string of integers, return the number of odd-numbered substrings that can be formed.

For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

iterate through every possigle substring
  1341
  1
  13
  134
  1341
  3
  341
  4
  41
  1

  if sum is odd, add to resultArr

*/

function solve(str) {
  let oddNums = 0;
  for (let startIdx = 0; startIdx < str.length; startIdx++) {
    for (let endIdx = startIdx + 1; endIdx <= str.length; endIdx++) {
      let substr = str.slice(startIdx, endIdx);
      if (Number(substr[substr.length - 1]) % 2 === 1) oddNums += 1;
    }
  }
  return oddNums;
}



console.log(solve("1341")) // = 7. See test cases for more examples. 
console.log(solve("13472315")) //28