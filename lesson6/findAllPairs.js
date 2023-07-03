/* You are given array of integers, your task will be to count all pairs in that array and return their count.

Notes:

Array can be empty or contain only one value; in this case return 0
If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
Random tests: maximum array length is 1000, range of values in array is between 0 and 1000
Examples

[1, 2, 5, 6, 5, 2]  -->  2
...because there are 2 pairs: 2 and 5

[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
...because there are 4 pairs: 2, 20, 6 and 2 (again) 

initialize pairs = 0
find a pair
  iterate through for compare1
    iterate though for compare2
      compare 2 selected
when we find a pair, pairs += 1
delete the pairs as we find them

return pairs

*/

function duplicates(arr) {
  let pairs = 0;
  for(let i1 = 0; i1 < arr.length; i1++) {
    for(let i2 = i1 + 1; i2 < arr.length; i2++) {
      if (arr[i1] === arr[i2]) {
        //console.log(arr[i1], arr[i2])
        [arr[i1], arr[i2]] = [NaN, NaN];
        i2 = 0;
        pairs += 1;
      }
    }
  }
return pairs;
}

duplicates([1, 2, 5, 6, 5, 2]) //2;
duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]) //4;
duplicates([0, 0, 0, 0, 0, 0, 0]) //3;
duplicates([1000, 1000]) //1;
duplicates([]) //0;
duplicates([54]) //0;