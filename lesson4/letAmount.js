let obj = {};
let statement = "The Flintstones Rock";

statement.split('').forEach(letter => {
  if (letter !== ' ') obj[letter] = obj[letter] + 1 || 1;
});

console.log(obj);

