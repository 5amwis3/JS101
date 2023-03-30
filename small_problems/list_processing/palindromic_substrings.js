//function palindromes(str) {
//  let combinations = [];
//
//  for (let start = 0; start < str.length - 1; start++) {
//    for (let end = start + 2; end <= str.length; end++) {
//      combinations.push(str.slice(start, end));
//    }
//  }
//
//  console.log(combinations.filter(check => isPalindrome(check)));
//}

function palindromes(str) {
  console.log(substrings(str).filter(check => isPalindrome(check)));
}

function substrings(str) {
  return str.split('').map((_, idx) => leadingSubstrings(str.slice(idx))).flat(Infinity);
}

function leadingSubstrings(str) {
  return str.split('').map((_, idx) => str.slice(0, idx + 1));
}

function isPalindrome(str) {
  return str.length > 1 && str === str.split('').reverse().join('');
}

//palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]