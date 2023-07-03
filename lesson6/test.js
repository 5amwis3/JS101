/* Shift all the vowels in a string N letters later in the alphabet
Remove all non-letter characters from a string 


-- Understand the Problem     - ("I am going to start by reading the problem")
    Input:                    - ("Let me start by breaking this down into inputs and outputs")
    Output: 

    Main Idea: 

    Rules: shift 2 letters down the alphabet


-- Structuring the Algorithm  - (“Just thinking at a high level, to solve this problem I would …”)
    1. Mental Model: (play out examples | multiple ideas | Obj vs Array)
      * 

    2. Pick 1 Algorithm (Lang Agnostic | Specific Bounds): 
      * break into array
      * change each character
      *   get char code point
      *     add 2 to code point
      *     if char y or z
      *       subtract 26 from code point
      *   turn code point back into char
      *   return char and move onto next char in array
      *

TEST TEST TEST
charCodeAt()
String.fromCharCode()
*/
// function removeNonAlpha(str) {
//   return str.split('').filter(char => {
//     return char.toLowerCase() !== char.toUpperCase();
//   }).join('')
// }

// function shift(str) {
//   return str.split('').map((char, idx) => {
//     let codePoint = str.charCodeAt(idx)
//     if ('yz'.includes(char)) codePoint -= 26;

//     codePoint += 2;
//     return String.fromCharCode(codePoint);
//   }).join('')
// }

// function rev(str) {;
//   return str.split('').reduce((accu, letter) => {;
//     return letter += accu;
//   }, '');
// };

// console.log(rev('&*)*(&abcxyz'))
// console.log(shift('&*)*(&abcxyz'))
// console.log(removeNonAlpha('&*)*(&abcxyz'))

function check(letter) {
  return letter >= 'a' && letter <= 'z' ||
  letter >= 0 && letter <= 9;
}

console.log(check('0'))