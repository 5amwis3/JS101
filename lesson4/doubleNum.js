function doubleNum(nums) {
  for (let index = 0; index < nums.length; index += 2) {
    nums[index] *= 2;
  }
  return nums;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleNum(myNumbers)); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers);                // => [1, 4, 3, 7, 2, 6]