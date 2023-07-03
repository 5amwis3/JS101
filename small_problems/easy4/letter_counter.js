let isLetter = char => char.toUpperCase() !== char.toLowerCase();

function cleaned(str) {
  let cleaned = '';

  str.split('').forEach(char => {
    if (isLetter(char) || char === ' ') {
      cleaned += char;
    }
  });
  return cleaned;
}

function wordSizes(str) {
  let obj = {};
  
  cleaned(str).split(' ').forEach(word => {
    if (obj[word.length]) {
      obj[word.length] += 1;
    } else {
      obj[word.length] = 1;
    }
  });

  console.log(obj);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}