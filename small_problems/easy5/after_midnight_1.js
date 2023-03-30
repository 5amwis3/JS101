//function timeOfDay(deltaMinutes) {
//  const MINUTES_PER_HOUR = 60;
//  let hours = deltaMinutes / MINUTES_PER_HOUR;
//  let mins = deltaMinutes % MINUTES_PER_HOUR;
//
//  while (hours > 24) {
//    hours -= 24;
//  }
//  while (hours < 0) {
//    hours += 24
//  }
//  if (mins < 0) mins += 60;
//  
//  console.log(format(hours, mins));
//}
//
//function format(hour, min) {
//  hour = String(parseInt(hour)).padStart(2, 0);
//  min = String(parseInt(min)).padStart(2, 0);
//
//  return `${hour}:${min}`
//}



timeOfDay(0) === "00:00";
timeOfDay(-3) === "23:57";
timeOfDay(35) === "00:35";
timeOfDay(-1437) === "00:03";
timeOfDay(3000) === "02:00";
timeOfDay(800) === "13:20";
timeOfDay(-4231) === "01:29";