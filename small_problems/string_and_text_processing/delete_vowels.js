function removeVowels(arr) {
  console.log(arr.map(word => word.
    split('').
    filter(letter => !['a','e','i','o','u'].includes(letter.toLowerCase())).
    join('')));
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]