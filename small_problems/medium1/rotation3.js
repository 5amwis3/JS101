function maxRotation(num) {
  let arr = String(num).split('');
  for (let index = 0; index < arr.length - 1; index++) {
    let rotate = arr.splice(index, 1);
    arr.push(rotate);
  }
  console.log(Number(arr.join('')));
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
