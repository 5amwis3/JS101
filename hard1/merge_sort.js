/*
Merge sort is a recursive sorting algorithm that works by 
breaking down an array's elements into nested subarrays, 
then combining those nested subarrays back together in sorted order. 

Given the array [9, 5, 7, 1], let's walk through the process of sorting it with merge sort. We'll start off by breaking the array down into nested subarrays:

[9, 5, 7, 1] -->
[[9, 5], [7, 1]] -->
[[[9], [5]], [[7], [1]]]
We then work our way back to a flat array by merging each pair of nested subarrays back together in the proper order:

Copy Code
[[[9], [5]], [[7], [1]]] -->
[[5, 9], [1, 7]] -->
[1, 5, 7, 9]


Write a function that takes an array argument and returns a new array that contains the values from the input array in sorted order. The function should sort the array using the merge sort algorithm as described above. 
You may assume that every element of the array will be of the same data type—either all numbers or all strings.

Feel free to use the merge function you wrote in the previous exercise.

Examples:

Copy Code
mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
mergeSort([5, 3]);                 // [3, 5]
mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

input array
return: new array sorted



define combined
  initialize to concatenation of the two arrays
    the arrays need to be coppies of the original

  sort combined ascending


  function merge(arr1, arr2) {
  let combined = arr1.slice().concat(arr2.slice(), 1, {a: 2}, 1, 1);
  console.log(combined.sort((a, b) => a - b));
//  console.log(combined);

function merge(arr1, arr2) {
  let combined = arr1.slice().concat(arr2.slice(), {a: 2}, 1, 1);
  console.log(combined.sort((a, b) => a - b));
//  console.log(combined);
}
}
*/

function merge(arr1, arr2) {
  let combined = [9].concat(arr2.slice(), {a: 2}, 1, 1);
  console.log(combined.sort((a, b) => console.log(a - b)));
//  console.log(combined);
}

merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]