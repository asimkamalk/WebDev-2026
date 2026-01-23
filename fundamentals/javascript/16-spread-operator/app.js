// The spread operator is a new addition to the set of operators in JavaScript ES6.
// It takes in an iterable (e.g an array) and expands it into individual elements.
// The spread operator is commonly used to make shallow copies of JS objects.
// Using this operator makes the code concise and enhances its readability.

// Spread Operators with Function

function giveMe4(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}

const colors = ["red", "green", "blue", "purple"];

// ❌ Passing the array directly:
// The entire array is assigned to parameter `a`
// Other parameters (`b`, `c`, `d`) remain undefined
// giveMe4(colors);
// Output:
// a [ 'red', 'green', 'blue', 'purple' ]
// b undefined
// c undefined
// d undefined

// ✅ Using the spread operator:
// The array is unpacked, and each value is passed
// to the function parameters in order
giveMe4(...colors);
// Output:
// a red
// b green
// c blue
// d purple

// Spread Operator with Arrays

const strNums = ["one", "two", "three", "four"];
const moreNums = ["five", "six", "seven", "eight"];

// ❌ Without spread operator:
// Arrays are added as elements, resulting in a nested array
const concat = [strNums, moreNums];
console.log(concat);
// Output:
// [
//   ["one", "two", "three", "four"],
//   ["five", "six", "seven", "eight"],
// ]

// ✅ Using spread operator:
// Arrays are unpacked and merged into a single flat array
const concatArr = [...strNums, ...moreNums];
console.log(concatArr);
// Output:
// ["one", "two", "three", "four", "five", "six", "seven", "eight"]

// Example 2:
const peoples = ["Asim", "Kamal"];

const newPeoples = [...peoples, "Khan"];
console.log(newPeoples);
// Output:
// [ 'Asim', 'Kamal', 'Khan' ]

// Spread Operator with Objects

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

const obj2 = {
  d: 4,
  e: 5,
  f: 6,
};

// ❌ Without spread operator:
// Objects remain separate, nothing is merged
console.log(obj1, obj2);
// Output:
// { a: 1, b: 2, c: 3 } { d: 4, e: 5, f: 6 }

// ✅ Using spread operator:
// Properties from both objects are unpacked and combined
// into a single new object
const concatObj = { ...obj1, ...obj2 };
console.log(concatObj);
// Output:
// { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

// Example 2:

const person = {
  name: "Asim Kamal",
  age: 22,
  gender: "male",
};

// Original object
console.log(person);
// Output:
// { name: 'Asim Kamal', age: 22, gender: 'male' }

// ✅ Cloning object using spread operator and adding a new property
// This creates a shallow copy of the original object
// and adds/overrides any properties specified after the spread
const clonePerson = { ...person, work: "Programmer", location: "Pakistan" };
console.log(clonePerson);
// Output:
// { name: 'Asim Kamal', age: 22, gender: 'male', work: 'Programmer' location: 'Pakistan' }
