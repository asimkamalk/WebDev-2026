// When we provide function as an (argument) to other
// function that function is known as callback function.

function showCallFunc(fn) {
  const value = 10;
  fn(value);
}

showCallFunc(function (value) {
  console.log(value);
});

// Example 2

function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

// function callback() {
//   console.log(`I am callback function `);
// }

greet("Asim", function callback() {
  console.log(`I am callback function `);
});
// Hello Asim
// I am callback function
