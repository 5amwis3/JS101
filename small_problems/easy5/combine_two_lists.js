//function interleave(arr1, arr2) {
//  let combinedArr = [];
//  for (let indx = 0; indx < arr1.length; ++indx) {
//    combinedArr.push(arr1[indx], arr2[indx]);
//  }
//  
//  console.log(combinedArr);
//}

//function interleave(arr1, arr2) {
//  let combinedArr = [];
//  arr1.forEach((char, indx) => {
//    combinedArr.push(char, arr2[indx]);
//  })
//  console.log(combinedArr);
//}

//function interleave(arr1, arr2) {
//  console.log(arr1.map((char, index) => {
//    return [char, arr2[index]];
//  }).flat());
//}

function interleave(arr1, arr2) {
  console.log(arr1.reduce((accu, curr, idx) => {
    accu.push(curr, arr2[idx]);
    return accu;
  }, []));
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]