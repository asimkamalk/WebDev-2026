// For Loop

// for (initialExpression; condition; increment/decrement or iterations) {code}

// Incrementing i value
for (let i = 1; i <= 10; i++) {
  console.log(`Hello ${i}`);
}

// Decrementing i value

for (let i = 10; i >= 0; i--) {
  console.log(`Decrementing ${i}`);
}

// Printing tables

let tableNumber = 2;

for (let i = 1; i <= 10; i++) {
  console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}

// Let ask the user
// let userInput = prompt("Enter the table you want");
// let table = Number(userInput);

// Check if the input is not a number OR if the user cancelled the prompt
// if (isNaN(table) || userInput === null) {
//   console.log("Please enter a valid number.");
// } else {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${table} x ${i} = ${table * i}`);
//   }
// }

console.log("Nested for loop");

// Nested for loop
for (let i = 1; i <= 2; i++) {
  console.log("Outer loop", i);
  //   nested loop
  for (let j = 1; j <= 5; j++) {
    console.log("Inner loop", j);
  }
}
