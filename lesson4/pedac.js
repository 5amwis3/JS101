/*
questions:
should the palandrome be case sensative?
What to do with empty string input?
Should it return a different string? yes, strings are immutable

input: string
output: array of substrings containing all the case sensative palindromes
  ex.'abBA' is not a palindrome
rules: 
  explicit requirements: 
    - every palindrome in the string must be converted to 
      upper case.
    - palindromes are case sensative
  implicit requirements:
    -if string is empty, result should be an empty string
    
*/

function substrings(str) {
  let result = []; // will contain all required substrings
  for (let startingIndex = 0; startingIndex < str.length - 1; ++startingIndex) {
    for(let numChars = 2; numChars < str.length; ++numChars) {
      let substring = str.slice(startingIndex, startingIndex + numChars);
      result.push(substring);
    }
  }
  return result;
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function palindromeSubstrings(str) {
  let result = [];
  let substrArray = substrings(str);
  substrArray.forEach(substr => { 
    if (isPalindrome(substr)) result.push(substr); 
  });
  return result;
}

console.log(palindromeSubstrings("supercalifragilisticexpialidocious")); // ["ili"]
console.log(palindromeSubstrings("abcddcbA"));   // ["bcddcb", "cddc", "dd"]
console.log(palindromeSubstrings("palindrome")); // []
console.log(palindromeSubstrings(""));           // []