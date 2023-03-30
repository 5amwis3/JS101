function rotateRightmostDigits(num, lastCount) {
  if (lastCount === 1) return num;
  
  let arr = String(num).split('');
  let move = arr.splice(arr.length - lastCount, 1);

  return Number(arr.concat(move).join(''));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917