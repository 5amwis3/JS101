/* A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence 
"The quick brown fox jumps over the lazy dog"
 is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. 

turn sentence to lowercase
filter out all non lowercase chars
initiate obj with all letters of alphabet to zero
if all objets values are > 0 
  return true
  else
  return false

*/

/* function pangram(str) {
  let num = 'a'.charCodeAt(0);
  let obj = {}
  for (let num = 'a'.charCodeAt(0); num <= 'z'.charCodeAt(0); num++) {
    obj[String.fromCharCode(num)] = 0;
  }

  str.toLowerCase().split('').forEach(char => {
    if (obj.hasOwnProperty(char)) obj[char] += 1;
  });

  return Object.values(obj).every(num => num > 0);

  check if ever letter abcd... is included in str
} */

function pangram(str) {
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every(let => str.toLowerCase().includes(let));
}

console.log(pangram("The quick brown fox jumps over the lazy dog"));