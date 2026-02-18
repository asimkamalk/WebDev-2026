// The reduce() method applies the reducer function to each element of an array, accumulating the results into a single value. It is often used to perform calculations or aggregations on array elements and simplify the array into a single value.

const numbers = [1, 2, 3, 4, 5];

// reduce() executes a reducer function on each element, resulting in a single output value
// Parameters:
// - p (accumulator): accumulates the callback's return values
// - c (current value): the current element being processed
// The 0 is the initial value for the accumulator
const sum = numbers.reduce((p, c) => {
  console.log(`Previous: ${p}`); // Shows accumulator value before addition
  console.log(`Current: ${c}`); // Shows current array element being processed

  return p + c; // Add current value to accumulator
}, 0); // Start with 0 as initial value

console.log(sum); // 15 (1+2+3+4+5)

// Console output will show:
// Previous: 0, Current: 1
// Previous: 1, Current: 2
// Previous: 3, Current: 3
// Previous: 6, Current: 4
// Previous: 10, Current: 5
// Final sum: 15
