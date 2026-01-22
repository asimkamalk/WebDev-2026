// Arrow functions, also known as fat arrow functions, are a concise and shorter way to define functions in JavaScript. They were introduced in ECMAScript 6 (ES6) and provide a more compact syntax compared to traditional function expressions

// Regular
// function greet(username) {
//   return `Hello, ${username}!`;
// }

// console.log(greet("Asim")); //Hello, Asim!

// Arrow function

greet = (username) => `Hello ${username}!`;
console.log(greet("Asim")); //Hello Asim!

const double = (n) => n * 2;
console.log(double(5)); //10
