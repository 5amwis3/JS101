function isBalanced(str) {
  let leftNum = 0;
  let rightNum = 0;
  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx] === ')' && leftNum === rightNum) return false;
    if (str[idx] === '(') {
      leftNum += 1;
    } else if (str[idx] === ')') {
      rightNum += 1;
    }
  }
  return rightNum === leftNum;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);