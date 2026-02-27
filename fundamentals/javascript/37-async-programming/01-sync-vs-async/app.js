// Synchronous Code

// function myFunc() {
//   console.log("Inside function");
// }

// console.log("Start");
// myFunc();
// console.log("End");

// Asynchronous Code

console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeOut");
}, 2000);

console.log("End");
