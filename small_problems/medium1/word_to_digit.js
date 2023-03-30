let numArray = [
'zero', 'one', 'two', 'three', 'four',
'five', 'six', 'seven', 'eight', 'nine'
];

function wordToDigits(str) {
  let noPeriod = str.split('.').join('');
  
  return noPeriod.split(' ').map(word => {
    if(numArray.includes(word)) {
      return numArray.indexOf(word);
    } else {
      return word;
    }
  }).join(' ');
}

function wordToDigit(sentence) {
  numArray.forEach((word, index) => {
    let regex = new RegExp(`\\b${word}\\b`, 'g');
    sentence = sentence.replace(regex, index);
  });

  return sentence;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks weight done.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."