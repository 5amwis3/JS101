function validatePIN (pin) {
  let nums = ['0','1','2','3','4','5','6','7','8','9'];
  let onlyNums = pin.split('').every(char => nums.includes(char));

  if (onlyNums) {
    return pin.length === 4 || pin.length === 6;
  }
    return false;
}

console.log(validatePIN("1"));
console.log(validatePIN("12"));
console.log(validatePIN("123"));
console.log(validatePIN("12345"));
console.log(validatePIN("1234567"));
console.log(validatePIN("-1234"));
console.log(validatePIN("1.234"));
console.log(validatePIN("-1.234"));
console.log(validatePIN("00000000"));
console.log(validatePIN("a234"));
console.log(validatePIN(".234"));
console.log('---');
console.log(validatePIN("1234"));
console.log(validatePIN("0000"));
console.log(validatePIN("1111"));
console.log(validatePIN("123456"));
console.log(validatePIN("098765"));
console.log(validatePIN("000000"));
console.log(validatePIN("123456"));
console.log(validatePIN("090909"));