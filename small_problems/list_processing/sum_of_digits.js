function sum(num) {
  console.log(String(num)
         .split('')
         .reduce((acc, char) => Number(char) + acc, 0));
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45