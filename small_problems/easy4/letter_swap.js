function swap(str) {
  let newPhrase = (str.split(' ').map(word => {
    if (word.length === 1) return word;

    return word[word.length - 1] + word.slice(1,-1) + word[0];
  }).join(' '));

  console.log((newPhrase));
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"