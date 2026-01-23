// 1. Make a clone of "arr, arr2" by using spread operator
// 2. Make a clone of "user" object using spread operator

let arr = [1, 2, 3];
let arr2 = [4, 5];

const arr3 = [...arr, ...arr2];
console.log(arr3); //[ 1, 2, 3, 4, 5 ]

const user = {
  name: "Jen",
  age: 22,
};

const userCloned = { ...user };
console.log(userCloned); //{ name: 'Jen', age: 22 }
