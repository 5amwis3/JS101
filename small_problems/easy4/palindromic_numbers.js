function isPalindromicNumber(number) {
  return String(number) === String(number).split("").reverse().join("");
}

//Further exploration

function isPalindrome(num, length) {
  num = String(num);
  console.log(num);
  if (length !== num.length) {
    let diff = length - num.length;
    for (let i = (num.length - 1); i >= diff; i--) {
      if (num[i] === "0") {
        num = num.slice(0, i);
      } else {
        break;
      }
    }
  }
  return isPalindromicNumber(num);
}

console.log(isPalindrome(0026, 4));  // true
console.log(isPalindrome(00330, 5)); // false
console.log(isPalindrome(0, 1)); //true