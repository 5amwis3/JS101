let munstersDescription = "The Munsters are creepy and spooky.";

function swapCase (str) {
  let newWord = '';
  for (let letter = 0; letter < str.length; ++letter)
  if (str.charAt(letter) === str.charAt(letter).toUpperCase()) {
    newWord = newWord.concat(str.charAt(letter).toLowerCase());
  } else {
    newWord = newWord.concat(str.charAt(letter).toUpperCase());
  }
  return newWord;
}

console.log(swapCase(munstersDescription));

//console.log(munstersDescription.split("").map(char => {
//  if (char === char.toUpperCase()) {
//    return char.toLowerCase();
//  } else {
//    return char.toUpperCase();
//  }
//}).join(""));