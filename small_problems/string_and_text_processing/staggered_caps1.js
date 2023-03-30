function staggeredCase(str) {
  let wIeRdStR = '';

  for (let index = 0; index < str.length; index++) {
    if (index % 2 === 0) {
      wIeRdStR += str[index].toUpperCase();
    } else {
      wIeRdStR += str[index].toLowerCase();
    }
  }
  return wIeRdStR;
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"