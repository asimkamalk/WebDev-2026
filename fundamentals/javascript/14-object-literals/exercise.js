// REFACTOR ES5 CODE TO ES6 (Enhanced Object Literals)
// ES5 code

// var a = 1,
// b = 2,
// c = 3;
// obj = {
// a: a,
// b: b,
// c: c,
// };

const a = 1;
const b = 2;
const c = 3;

obj = {
  a,
  b,
  c,
};

console.log(obj);

// Challenge 2

// ES5 code
// var lib = {
// sum: function (a, b) {
// return a + b;
// },
// mult: function (a, b) {
// return a * b;
// },
// };
//console.log(lib.sum(2, 3)); // 5
// console.log(lib.mult(2, 3)); // 6

// ES5 code
const lib = {
  sum: (a, b) => a + b,
  mult: (a, b) => a * b,
};
console.log(lib.sum(2, 3)); // 5
console.log(lib.mult(2, 3)); // 6

// Challenge 3
// function getPersion ES6(name, age, height) {
// return {
// name: name,
// age: age,
// height: height,
// };
// }

// getPersion ES6("HuXn", 19, 200);
// Expected output: { name: 'HuXn', age: 19, height: 200 }

const getPersionES6 = (name, age, height) => {
  return { name, age, height };
};

console.log(getPersionES6("HuXn", 19, 200));
// Output { name: 'HuXn', age: 19, height: 200 }
