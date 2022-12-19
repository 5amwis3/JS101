let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(obj) {
  let selectedFruits = {};

  for (let index = 0; index < Object.values(obj).length; ++index) {
    let fruitOrVegetable = Object.values(obj)[index]

    if ('Fruit'.includes(fruitOrVegetable)) {
    selectedFruits[Object.keys(obj)[index]] = Object.values(obj)[index];
    } 
  }
  console.log(selectedFruits);
}

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }