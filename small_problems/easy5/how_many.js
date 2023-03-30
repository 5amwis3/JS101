let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(arr) {
  let obj = {}; 
  arr.forEach(vehicle => {
    if (obj[vehicle]) {
      obj[vehicle] += 1;
    } else {
      obj[vehicle] = 1;
    }
  })
  
  for (let vehicle in obj) {
    console.log(`${vehicle} => ${obj[vehicle]}`)
  }
}

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2