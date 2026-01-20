// A function is a block of code that performs a specific task.
// Function makes the code reusable. You can declare it once and use it multiple times.
// Function makes the program easier as each small task is divided into a function.
// Function increases readability.
// DRY - Don't Repeat Yourself
// function name (parameter IfAny) {...}

// Function Declaration

// it will  run/execute
greet(); //Hello from a function
function greet() {
  console.log("Hello from a function");
}
// call, run, execute a function
greet(); //Hello from a function
greet();
greet();
greet();
greet();

// Calling a function multiple time at once using for-loop
console.log("\nUsing for loop");

for (let i = 1; i <= 5; i++) {
  greet();
}

function sayHello(name) {
  console.log(`Hello ${name}`);
}
sayHello(); //Hello undefined
sayHello("Asim"); //Hello Asim
sayHello("Kamal"); //Hello Kamal

// return -> function
function add(a, b) {
  return a + b;
}

console.log(add(2, 2)); //4

const result1 = add(5, 5);
const result2 = add(10, 15);
const result3 = add(20, 10);
console.log(result1); //10
console.log(result2); //25
console.log(result3); //30

// Function Expression

//greeting(); // it will not run/execute

const greeting = function (user) {
  console.log("Hello from function expression");
};

greeting(); //Hello from function expression
