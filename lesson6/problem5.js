// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.


//input str
//output least common char

//not case sensitive
//return first character

/*

create an obj

iterate through each character
  if we haven't seen character before
    store character and value of 1
  if we have
    add 1 to it's value

look at all obj values to see which one is the highest
  look at entries second value and sort entries

*/

function leastCommonChar(str) {
  let obj = {};
  str.split('').forEach(char => {
    char = char.toLowerCase();
    if (obj.hasOwnProperty(char)) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  });
  let sortedEntries = Object.entries(obj).sort((a,b) => a[1] - b[1])
  return sortedEntries[0][0];
}

// Examples:

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".