function multiplicativeAverage(arr) {
  let product = arr.reduce((accu, num) => accu * num, 1);

  console.log((product / arr.length).toFixed(3));
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"