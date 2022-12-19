function signedIntegerToString(num) {
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = '';
  let sign = '';

  if (num < 0) {
    num *= -1;
    sign = '-';
  } else if (num > 0) {
    sign = '+';
  }

  do {
    remainder = num % 10;
    num = Math.floor(num / 10);
  
    result = DIGITS[remainder] + result;
  } while (num > 0);

  return sign + result || result;
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");