let a = parseInt(10);
let b = parseInt(5);

let c = (a * b / 100);
let d = (a + c);

console.log(Number.isInteger(a),  //true
            Number.isInteger(b),  //true
            Number.isInteger(c),  //false
            Number.isInteger(d)); //false