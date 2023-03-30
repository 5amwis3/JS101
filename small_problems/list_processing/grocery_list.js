function buyFruit(array) {
  let list = [];
  array.forEach(arr => {
    let quantity = arr[1];
    let item = arr[0];
    
    for (let index = 0; index < quantity; index++) {
      list.push(item);
    }
  });
  console.log(list);
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

