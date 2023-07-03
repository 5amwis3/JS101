//input string
//convert string to array
//if first index equals second
  //delete second and compare first and second again
  //first does not equal second
  //move to the third index and compare with the fourth
//join and return comprimised string

function crunch(str) {
let finalStr = '';
for (let idx = 0; idx < str.length; idx++) {
  if (str[idx] !== str[idx + 1]) finalStr += str[idx];
}
console.log(finalStr);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""