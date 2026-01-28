// The "for... in" loop in JavaScript is used to iterate over the enumerable properties of an object. It is a way to loop through the keys (property names) of an object

// for (let key in object) {...}

// Looping through all properties of the 'person' object using a `for...in` loop.
// 'keys' represents each property name in the object.
// The code prints the property name and its corresponding value.
let person = {
  name: "Asim",
  age: 22,
  gender: "male",
};

for (let keys in person) {
  console.log(keys); // Prints the property name (e.g., "name", "age"...)
  console.log(keys, person[keys]); // Prints property name and value (e.g., "name Asim", "age 22"...)
}

// Using a `for...in` loop to iterate over an array.
// 'index' represents each index of the array.
// Prints the index and the corresponding element at that index.
let list = ["one", "two", "three", "four"];

for (let index in list) {
  console.log(`${index}: ${list[index]}`); // Output: 0: one, 1: two, etc.
}
