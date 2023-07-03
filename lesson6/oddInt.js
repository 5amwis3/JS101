/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

store each element as property and times it appears as it's value
find the odd value

iterate through arr
find out how many times selected element appears, iff odd, return number
*/

function doTest(arr) {
  let tested = [];
  for (let idx = 0; idx < arr.length; idx++){
    if (tested.includes(arr[idx])) continue;
    let matches = 1;

    for (let idx2 = idx + 1; idx2 < arr.length; idx2++) {
      if (arr[idx] === arr[idx2]) matches += 1
    }
    tested.push(arr[idx]);
    if (matches % 2 === 1) return arr[idx];
  }
  return null;
}

console.log(doTest([1,2,2,3,3,3,4,3,3,3,2,2,1]))