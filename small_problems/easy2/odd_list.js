//function oddities(arr) {
//  let oddArray = [];
//  for (let index = 0; index < arr.length; index += 2) {
//    oddArray.push(arr[index]);
//  }
//  return oddArray;
//}

let oddities = (array) => {
  return array.filter((elmnt) => array.indexOf(elmnt) % 2 === 0);
};

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []