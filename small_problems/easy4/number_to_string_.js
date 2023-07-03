/* 
get farthest right number
  num % 10
*/

function integerToString(num) {
  let sign = num < 0 ? '-' : '+';
  if (Math.abs(num) === 0) console.log(sign + '0');
  let arr = ['0','1','2','3','4','5','6','7','8','9'];
  let str = '';
  num = Math.abs(num);
  while (num > 0) {
    str += arr[num % 10];
    num = (num - (num % 10)) / 10;
  }
  console.log(sign + str.split('').reverse().join(''));
}

integerToString(-4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"