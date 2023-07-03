/* function dms(num) {
  num = overUnderRotate(num);

  let deg = Math.floor(num);
  let min = (num % 1) * 60;
  let sec = (min % 1) * 60;

  console.log(`${deg}˚${padZeros(min)}'${padZeros(sec)}"`);
}

function overUnderRotate (num) {
  while (num > 360) {
    num = 360 - num;
  }
  while (num < 0) {
    num = 360 + num;
  }

  return num;
}

function padZeros(num) {
  return String(Math.floor(num)).padStart(2, 0);
}


dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
dms(-1);   // -1°00'00"
dms(-40.31);  // 400°00'00"
dms(-40);  // -40°00'00"
dms(-420); // 420°00'00" */

/* Write a function that takes a floating point number representing 
an angle between 0 and 360 degrees and returns a string 
representing that angle in degrees, minutes, and seconds. 
You should use a degree symbol (˚) to represent degrees, 
a single quote (') to represent minutes, and a double quote (") 
to represent seconds. There are 60 minutes in a degree, 
and 60 seconds in a minute. 

76.73d * 60 = min 


degrees 
60 min in 1 degree... .73




positive inputs



neg


*/

function dms(deg) {
  deg *= 1000;
  let pad2 = num => String(Math.trunc((num / 1000))).padStart(2, 0);
  const DEG_TO_MIN = num => (num * 60);
  const MIN_TO_SEC = num => (num * 60);

  let rotations = Math.trunc(deg / (360 * 1000));
  deg = deg - (rotations * (360 * 1000));
  if (deg < 0) deg = deg + (360 * 1000);
  
  let min = DEG_TO_MIN(deg % (1 * 1000));
  let sec = MIN_TO_SEC(min % (1 * 1000));
  console.log(deg, min, sec)

  console.log(`  ${pad2(deg)}° ${pad2(min)}' ${pad2(sec)}"`);
}




dms(-1.21);           // 30°00'00"
dms( 1.21);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(-76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
/* dms(-93.034773);    // 93°02'05"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
dms(-1);   // -1°00'00"
dms(-40.31);  // 400°00'00"
dms(-40);  // -40°00'00"
dms(-420); // 420°00'00" */