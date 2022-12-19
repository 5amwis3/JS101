//input string
//convert string to array
//if first index equals second
  //delete second and compare first and second again
  //first does not equal second
  //move to the third index and compare with the fourth
//join and return comprimised string

function crunch(str) {
  fibArray = str.split('');
  fibArray.forEach((letter, idx) => {
    while (letter === fibArray[idx + 1]) {
      fibArray.splice(idx, 1);
      if ()
    }
  })
  return fibArray.join('');
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""