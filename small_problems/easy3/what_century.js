let century = num => addEnding(Math.ceil(num/100));

function addEnding(num) {
  switch (Math.floor(num % 100)) {
    case 11: return num + 'th';
    case 12: return num + 'th';
    case 13: return num + 'th';
  }
  switch (Math.floor(num % 10)) {
    case 1: return num + 'st';
    case 2: return num + 'nd';
    case 3: return num + 'rd';
    default: return num + 'th';
  }
}


console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113rd"
