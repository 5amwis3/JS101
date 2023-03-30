// function average(array) {
//   let sum = array.reduce((accu, num) => accu + num, 0);
//   console.log(Math.floor(sum / array.length));
// }

function average(array) {
  let sum = 0;
  array.forEach(num => sum += num);
  console.log(Math.floor(sum / array.length));
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40