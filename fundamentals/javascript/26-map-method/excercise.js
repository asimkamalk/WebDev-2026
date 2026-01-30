// Exercise 1
// Create an array with random numbers.
// Use map() to multiply each number by 10.

let randomArr = [1, 4, 5, 6, 9];

// map() creates a NEW array by applying logic to each element
let multiply = randomArr.map((m) => {
  return m * 10;
});

console.log(multiply); // Output: [10, 40, 50, 60, 90]

// Exercise 2
// Capitalize words using map()
// ["asim", "kamal"]

let words = ["asim", "kamal"];

// Convert each word to uppercase and return a new array
let cap = words.map((c) => c.toUpperCase());

console.log(cap); // Output: ["ASIM", "KAMAL"]
