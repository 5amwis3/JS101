let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr = arr.map((obj) => {
  let incrementObj = {};

  for (let key in obj) {
    incrementObj[key] = obj[key] + 1;
  }
  return incrementObj;
});

console.log(newArr);