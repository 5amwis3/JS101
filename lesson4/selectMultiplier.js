function multiply(selection, multiplier) {
  let newMultiplied = [];

  for (let index = 0; index < selection.length; ++index) {
    newMultiplied.push(selection[index] * multiplier)
  }
  return newMultiplied;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]