// Iterate over the object & log the property and the value of that object using for in loop

// Using a `for...in` loop to iterate over all properties of an object.
// 'properties' represents each key in the object.
// Prints each key and its corresponding value.
const object = {
  a: 1,
  b: 2,
  c: 3,
};

for (let properties in object) {
  console.log(`${properties}: ${object[properties]}`); // Output: a: 1, b: 2, c: 3
}
