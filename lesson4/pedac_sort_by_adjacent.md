Problem
-----------
input: array of strings
output: new array sorted by highest number of adjacent consonants

explicit 

if they have equal amount of adjacent consonants
  remain in order
a consanant
  two in same word
  adjacent word consanant counts as well

implicit

strings contain multiple words
space included in word does not count as a placeholder
case does not matter
descending order


questions

  ? adjacent word consonant: this only counts for the original order?
  ? always have multiple words as input ?
  ? ascending or descening ?
  ? case ?

Examples
-----------
console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']

Data Structures
-----------
array with descending order
perhaps an object to store value

Algorithm
-----------
1. input array to function
2. create variables
  empty obj to store string and rank
  new array to store descending order
3. check to see how many adjacent consonants each str contains
    remove spaces from input string
    init count to 0
    iterate through input string
      if consanant is touching a consonant add 1
        continue to add until the next is not a consonant
        add an additional 1 for the original consonant 
        assign value as it's rank
        update obj key with string and value with rank
4. check object entries and sort
  sort obj values
    push their key to newArray
5. return sorted array

