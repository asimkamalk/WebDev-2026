// Ternary Operator

// The ternary operator in JavaScript is a concise way of writing conditional expressions by a question mark (?), an expression to execute if the condition is true, followed by a colon (:), and an expression to execute if the condition is false

// condition ? expressionIfTrue : expressionIfFalse;

// Basic if-else structure (commented for reference)
// if (condition) {
//   // runs when condition is true
// } else {
//   // runs when condition is false
// }

// Password length (example value)
let password = 8;

// Function to check password strength
function passwordChecker(ps) {
  // Traditional if-else approach (commented out)
  // if (ps >= 8) {
  //   return "Strong password";
  // } else {
  //   return "Weak password or password should be 8 characters";
  // }

  // ✅ Using ternary operator for concise conditional logic
  // If ps is exactly equal to 8 → return "Strong Password"
  // Otherwise → return "Weak Password"
  return ps === 8 ? "Strong Password" : "Weak Password";
}

// Calling the function and storing the returned value
const res = passwordChecker(password);

// Printing the result to the console
console.log(res); // Output: Strong Password

// Example 2
// Using the ternary operator to check if a person is an adult.
// If 'age' is 18 or more, 'isAdult' will be "Adult"; otherwise, it will be "Not Adult".
const age = 25;

const isAdult = age >= 18 ? "Adult" : "Not Adult";
console.log(isAdult); // Output: Adult
