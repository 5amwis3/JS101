function halvsies(array) {
  let split = Math.ceil(array.length / 2);

  let firstHalf = array.slice(0, split);
  let secondHalf = array.slice(split);

  console.log([firstHalf, secondHalf]);
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]