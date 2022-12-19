function stringToSignedInteger(str) {
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
  let sign;

  str = str.split('');
  if (str.includes('-')) {
    sign = str.shift();
  } else if (str.includes('+')) {
    str.shift();
  }
  
  let arrayOfDigits = str.map(char => DIGITS[char]);
  let finalNum = 0;
  arrayOfDigits.forEach(digit => (finalNum = finalNum * 10 + digit));

  return sign ? finalNum * -1: finalNum;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true