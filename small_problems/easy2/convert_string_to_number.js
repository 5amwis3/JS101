function stringToInteger(str) {
  const DIGITS = {
    '0' : 0,
    '1' : 1,
    '2' : 2,
    '3' : 3,
    '4' : 4,
    '5' : 5,
    '6' : 6,
    '7' : 7,
    '8' : 8,
    '9' : 9,
  }
  let arrayOfDigits = str.split("").map(char => DIGITS[char]);
  let finalNum = 0;
  arrayOfDigits.forEach(digit => (finalNum = finalNum * 10 + digit));

  return finalNum;
}

console.log(stringToInteger("4321")); // logs true
console.log(stringToInteger("570")); // logs true