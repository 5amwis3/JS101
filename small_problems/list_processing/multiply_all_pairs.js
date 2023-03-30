function multiplyAllPairs(arr, arr2) {
  let resultArr = [];
  arr.forEach(num => {
    arr2.forEach(num2 => {
      resultArr.push(num * num2);
    })
  })
  console.log(resultArr.sort((a, b) => a - b));
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
