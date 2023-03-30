//function sumOfSums(arr) {
// return iterate(arr).map(arr => arr
//                    .reduce((acc, arr) => acc + arr, 0))
//                    .reduce((acc, arr) => acc + arr, 0);
//}
//
//function iterate(arr) {
//  return arr.map((_, idx) => {
//    return arr.slice(0, idx + 1);
//  });
//}

const sumOfSums = (numArr) => {
  let count = 0;
  return numArr.map((num) => (count += num)).reduce((a, b) => a + b);
};

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35 