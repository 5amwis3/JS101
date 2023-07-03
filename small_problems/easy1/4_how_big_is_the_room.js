// calculate area


let length = 0;
let width = 0;
const SQMETERS_TO_SQFEET = 10.7639;

//get info from user
do {
length = parseInt(require('readline-sync').question('Enter Length (meters):  '), 10);
width = parseInt(require('readline-sync').question('Enter width (meters):  '), 10);

if (!(Number.isInteger(length) && (Number.isInteger(width)))) {
  console.log('\nError!\nPlease use valid integers\n_________________________');
}

} while (!(Number.isInteger(length) && (Number.isInteger(width))))


//calculate
let areaInM = (length * width).toFixed(2);
let areaInFt = (areaInM * SQMETERS_TO_SQFEET).toFixed(2);

console.log(`The area of the room is ${areaInM} square meters (${areaInFt} square feet)`);


