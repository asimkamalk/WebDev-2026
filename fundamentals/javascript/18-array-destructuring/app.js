// Example array
const foo = ["one", "two", "three"];

// Traditional way of accessing array elements

// console.log(foo[0]); // one
// console.log(foo[1]); // two
// console.log(foo[2]); // three

// Or assigning each element to a variable

// const one = foo[0];
// console.log(one); // one
// const two = foo[1];
// console.log(two); // two
// const three = foo[2];
// console.log(three); // three

// ✅ Array Destructuring: Extract values directly into variables
const [one] = foo; // Grab the first element
console.log(one); // one

const [, two] = foo; // Skip the first element, grab the second
console.log(two); // two

const [, , three] = foo; // Skip first two elements, grab the third
console.log(three); // three

// Example with fewer elements than variables
let arr = ["one", "two"];
const [red, yellow, green, blue] = arr;

console.log(red); // one  (first element)
console.log(yellow); // two  (second element)
console.log(green); // undefined (no third element in array)
console.log(blue); // undefined (no fourth element in array)

// ✅ Destructuring with default values
let a, b, c;

// a and b are undefined, so default values are applied if array value is undefined
[a = 5, b = 10, c] = [a, b, "new value"];
console.log(a); // undefined? Actually here a is undefined so default 5 applies, but your comment says 1 which is wrong. Correct value: 5
console.log(b); // 10 (b is undefined, default 10 applies)
console.log(c); // "new value" (from array)

// Destructuring return values from a function
function fn() {
  return [1, 2];
}

let x, y;
[x, y] = fn(); // Destructure the returned array
console.log(x); // 1
console.log(y); // 2

// Skipping elements during destructuring
function numbers() {
  return [10, 20, 30];
}

const [num1, , num2] = numbers(); // Skip the second element
console.log(num1); // 10
console.log(num2); // 30

// ✅ Using the rest operator with array destructuring
const [k, ...l] = ["one", "two", "three", true, 20];
// 'k' takes the first element
// 'l' takes the rest of the array as a new array
console.log(k); // one
console.log(l); // ['two', 'three', true, 20]
