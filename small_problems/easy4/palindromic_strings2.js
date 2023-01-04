function isRealPalindrome(str) {
  let cleaned = '';
  str = str.toLowerCase();

  str.split('').forEach(char => {
    if (isLetter(char) || isNumber(char)) {
      cleaned += char;
    }
  });

  console.log(cleaned === cleaned.split('').reverse().join(''));
}

let isLetter = char => char.toUpperCase() !== char.toLowerCase();

let isNumber = char => char >= '0' && char <= '9';


isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false