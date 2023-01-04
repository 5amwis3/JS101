function sortStringsByConsonants(array) {
  let sortedStrings = array.sort((a, b) => wordRank(b) - wordRank(a));
    

  return sortedStrings;
}

let wordRank = word => {
    word = word.split(' ').join('');
    let consonants = 'bcdfghjklmnpqrstvwxz';
    let rank = 0;
    let consonantOcassionEnded = false;

    for (let index = 0; index < word.length; ++index) {
      if (consonants.includes(word[index]) && consonants.includes(word[index + 1])) {
        rank +=1
        consonantOcassionEnded = true;
      } else if (consonantOcassionEnded === true) {
        rank +=1
        consonantOcassionEnded = false;
      }
  }
  return rank;
}

console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']