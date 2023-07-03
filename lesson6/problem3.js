// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

/*
“I’m going to start by breaking this problem down into its inputs and outputs.”

“Just thinking at a high level, to solve this problem I would ….”

“Before I use this method, let me test it out and see if it works the way I think it does.”

“That isn’t the result I expected, let’s go back and review the algorithm to see if we need to make 
any changes there first before revising the code.”
*/


/*
input string
output string sequence

every 4th char in every 2nd word => upper case

split the sentence into words
  all odd words get the following...
    4th charachter to uppercase
      to get every fourth 
        if index % 4 - 1 === 0
          word[idx] = transform that idx to upper
  convert back to one str
return new sentence
3 + 1 % 4
*/

function toWeirdCase(str) {
  let words = str.split(' ');
  for (let idx = 1; idx < words.length; idx += 2) {
    let newWord = '';
    for(let idx2 = 0; idx2 < words[idx].length; idx2 += 1) {
      if ((idx2 + 1) % 4 === 0) {
        newWord += words[idx][idx2].toUpperCase();
      } else {
        newWord += words[idx][idx2];
      }
    }
    words[idx] = newWord;
  }

  return (words.join(' '));
}


// 13 min
// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.


/* 
every
// 4th character in every second word converted to uppercase

input string
output string

seperate into words transform (map) idx % 2 === 1
    (every second word)
     idx 1, idx 3...
  seperate into chars transform (map) idx 3
      (every 4th char) to uppercase
      idx 3
  
*/

function toWeirdCase(str) {
  return (str.split(' ').map((word, wordIdx) => {
    if (wordIdx % 2 === 1) {
        return word.split('').map((char, charIdx) => {
          if((charIdx + 1) % 4 === 0) return char.toUpperCase();
          return char;
        }).join('');
    } else {
      return word;
    }
  }).join(' '))
}

// Examples:

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');

console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// The tests above should print "true".