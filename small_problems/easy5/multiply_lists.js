function multiplyList(arr1, arr2) {
  console.log(arr1.reduce((accu, element, i) => {
    accu.push(element * arr2[i]);
    return accu;
  }, []));
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]