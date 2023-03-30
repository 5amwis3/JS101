//psuedocode
/*
input: array of numbers, delimiter, word seperator
output: string


str = use delimiter in join( , delimiter) to convert array to string
if we have delimeter, use it
  if input arr has more than 1 length
    use word seperator after second to last element in array
    else output str
else 
  dont use it 

*/

function joinOr(arr, delimiter = ', ', word = 'or') {
  switch(arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return `${arr[0]} ${word} ${arr[1]}`;
    default:
      return arr.slice(0, arr.length - 1).join(delimiter)
        + `${delimiter}${word} ${arr[arr.length - 1]}`
  }

}

console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]));                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2"

/*
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(obj) {
  let fruits = {}
  for(let type in obj) {
    if(obj[type] === 'Fruit') {
      fruits[type] = obj[type];
    }
  }
  console.log(fruits);
}




selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }
*/











/*
function sortStringsByConsonants(arr) {
  return arr.sort((a, b) => rankAdjacentConsonants(b) - rankAdjacentConsonants(a));
}

function rankAdjacentConsonants(str) {
  let rank = 1;
  let consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z'];
  str = str.split(' ').join('');

  for(let start = 0; start < str.length; start++) {
    for(let end = start + 2; end <= str.length; end++) {
      let set = str.slice(start, end);
      let check = set.split('').every(letter => consonants.includes(letter));

      if(check && set.length > rank) {
        rank = set.length;
      }
    }
  }

  return rank;
}


console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']
*/