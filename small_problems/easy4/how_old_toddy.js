function teddyAge(min, max) {
  if (max < min) {
    [min, max] = [max,min];
  }
  let years = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(`Teddy is ${years} years old!`);
}

teddyAge(20,5);
teddyAge(5,20);