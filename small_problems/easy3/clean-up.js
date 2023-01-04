function cleanUp (str) {
  let cleaned = '';

  str.split('').forEach(char => {
    if (isLetter(char)) {
      cleaned += char;
    } else if (cleaned[cleaned.length -1] !== ' ') {
      cleaned += ' ';
    }
  });

  console.log(`"${cleaned}"`);
}

let isLetter = char => char.toUpperCase() !== char.toLowerCase();


cleanUp("---what's my +*& line?");    // " what s my line "