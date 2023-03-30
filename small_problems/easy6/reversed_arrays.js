function reverse(arr) {
  let copy = arr.splice();
  arrIndex = arr.length -1;

  for (index = 0; index < arr.length; index++) {
    arr[index] = copy[arrIndex];
    arrIndex -= 1;
  }
  return arr;
}

let list = [1, 2, 3, 4];
let result = list.reverse();
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = list1.reverse();
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = list2.reverse();
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = list3.reverse();
console.log(result3); // logs []
console.log(list3 === result3); // logs true