function staggeredCase(str, symbols = false) {
  let capitolize = true;
  return (str.split('').map(char => {
    if (char.toUpperCase() === char.toLowerCase()) {
      if (symbols) capitolize ? capitolize = false : capitolize = true;
      return char;
    } else if (capitolize) {
      capitolize = false;
      return char.toUpperCase();
    } else {
      capitolize = true;
      return char.toLowerCase();
    }    
  }).join(''));
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);