function stringy(num) {
  let array = [];
  for (let index = 1; index <= num; ++index) {
    if (index % 2 === 1) {
      array.push(1);
    } else {
      array.push(0);
    }
  }
  console.log(array.join(''));
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"