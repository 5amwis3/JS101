/* 
# Have the method letter_changes(str) take the str parameter being passed and modify it using the following algorithm.
# Replace every letter in the string with the 3rd letter following it in the alphabet
# (ie. c becomes f, Z becomes C).
# Then return this modified string.

create arr with all the letters (26 letters) {

if char to lowercase is not 
for each letter: replace it with another letter (use map)
  find letter idx in alphabet
  replace it with letter index + 3;
    if (letter index + 3) is >= 26
      subtract 26 from idx
return full str with replaced letters
}

'z' idx 25
  transform to idx 2
*/

function letter_changes(str) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  return  str.split('').map((char, idx) => {
    if (!alphabet.includes(char.toLowerCase())) return char;

    if (char === char.toUpperCase()) {
      return findNewChar(char.toLowerCase()).toUpperCase();
    } else {
      return findNewChar(char);
    }

    function findNewChar(char) {
      let alphaIndex = alphabet.indexOf(char) + 3;
      if (alphaIndex >= 26) alphaIndex -= 26;
      return alphabet[alphaIndex];
    }

  }).join('');
}


console.log(letter_changes("this long cake@&") == "wklv orqj fdnh@&")
console.log(letter_changes("Road trip9") == "Urdg wuls9")
console.log(letter_changes("EMAILZ@gmail.com") == "HPDLOC@jpdlo.frp")
console.log(letter_changes('xyz') == ('abc'))





/* 
each uppercase or lowercase letter has been shifted up by three indexes in the alphabet
please uncode into the original

alphabet arr = ['a', 'b', 'c'...]
have the letter 'a'
  transform into charCode with 'a'.charCodeAt(0)
stop iteration at 'z'.charCodeAt(0);

iterate through each char

  if char is not in alphabet, return char

  for the ones that have been affected...
    if char is uppercase
      find original charachter.toLowerCase()
      return character.toUpperCase()
    if char is lowercase
      find original charcter
      return character

  to find original char
    origIdx = find changed index and subtract 3 from that index
    if (origIdx < 0) + 26
    return character
*/

function uncode(str) {
  let alphabet = [];
  for (let index = 'a'.charCodeAt(0); index <= 'z'.charCodeAt(0); index++) {
    alphabet.push(String.fromCharCode(index));
  }
  
  return str.split('').map(char => {
    if (!alphabet.includes(char.toLowerCase())) return char;

    if (char === char.toUpperCase()) {
      return findOrig(char.toLowerCase()).toUpperCase();
    } else {
      return findOrig(char);
    }
  }).join('')

  function findOrig(char) {
    let origIdx = alphabet.indexOf(char) - 3;
    if (origIdx < 0) origIdx += 26;
    return alphabet[origIdx]
  }
}

console.log(uncode("HPDLOC@jpdlo.frp"))
console.log(uncode("wklv orqj fdnh@&"))