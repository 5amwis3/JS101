function dms(num) {
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
dms(-420); // 420°00'00"