function stringToSignedInteger(str) {
  const DIGITS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let negative = str.includes('-');

  numArray = str.split('').map(char => {
    return DIGITS.findIndex(num => char === num) + 1;
  });

  let result = numArray.reduce((stored, curr) => {
    return stored * 10 + curr;
  }, 0);

  return negative ? (result * (-1)) : result;
}


console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true