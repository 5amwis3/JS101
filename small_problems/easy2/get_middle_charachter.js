/* Write a function that takes a non-empty string argument and 
returns the middle character(s) of the string. If the string has 
an odd length, you should return exactly one character. If the 
string has an even length, you should return exactly two characters.

Examples:


input str
output middle char

if odd length
  return 1 char
if even 
  return 2 chars

Copy Code */

function centerOf(str) {
  if (str.length % 2  === 1) {
    console.log(str[(str.length - 1)/ 2])
  } else {
    console.log((str.slice(str.length / 2 - 1, (str.length / 2) + 1)))
  }
}
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"