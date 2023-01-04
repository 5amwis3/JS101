function twice(num) {
  if (isDouble(num)) {
    console.log(num);
  } else {
    console.log(num * 2);
  }
}

function isDouble(num) {
  let str = String(num);
  let half = Math.floor(str.length / 2);
  let left = str.substring(0,half);
  let right = str.substring(half);

  return left === right;
}

  twice(37);          // 74
  twice(44);          // 44
  twice(334433);      // 668866
  twice(444);         // 888
  twice(107);         // 214
  twice(103103);      // 103103
  twice(3333);        // 3333
  twice(7676);        // 7676