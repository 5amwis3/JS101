//

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) return false;
  
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) { //determines if between 0 and 255
      return false;
    }
  }

  return true;
}

console.log(isDotSeparatedIpAddress('4.5.5'));
console.log(isDotSeparatedIpAddress('1.2.3.4.5'));
console.log(isDotSeparatedIpAddress('1.2.3.4'));
console.log(isDotSeparatedIpAddress('5321.2.3.4'));
console.log(isDotSeparatedIpAddress('abc.2.3.4'));