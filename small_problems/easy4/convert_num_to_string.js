function signedIntegerToString(num) {
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let string = '';
  let sign;
  
  if (num < 0) {
    sign = 'negative';
    num *= -1;
  } else if (num > 0) {
    sign = 'positive';
  } else if (Object.is(num, -0)) {
    sign = 'negativeZero';
  }

  while (num !== 0) {
  string = DIGITS[num % 10] + string;
  num = Math.floor(num / 10);
  }

  if (sign === 'negative') {
    return `-${string}`;
  } else if (sign === 'positive') {
    return `+${string}`;
  } else if (sign === 'negativeZero') {
    return '-0';
  } else {
    return '0';
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
console.log(signedIntegerToString(-0) === "-0");