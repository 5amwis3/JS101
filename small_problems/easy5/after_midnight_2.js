const MIN_PER_HOUR = 60;
const HOUR_PER_DAY = 24;
const MIN_PER_DAY = MIN_PER_HOUR * HOUR_PER_DAY;

function afterMidnight(str) {
  let [hour, min] = str.split(':').map(num => Number(num));

  return((hour * MIN_PER_HOUR) + min) % MIN_PER_DAY;
}

function beforeMidnight(str) {
  let [hour, min] = str.split(':').map(num => Number(num));

  return ((MIN_PER_DAY) - ((hour * MIN_PER_HOUR) + min)) % MIN_PER_DAY;
}


console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);