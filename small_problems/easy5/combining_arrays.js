function union(...arrays) {
  let filteredArr = [];
  console.log(arrays);
  arrays.flat().forEach(num => {
    if (!filteredArr.includes(num)) {
      filteredArr.push(num);
    }
  })
  
console.log(filteredArr);
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]