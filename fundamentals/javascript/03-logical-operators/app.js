// 1. Logiacal AND (&&)
// -> TRUE if both operands/boolean values are true, else evaluates to false

const a = true;
const b = false;
const c = 4;

console.log(a && b); // false
console.log(a && c); // 4
console.log(c > 2 && c < 2); //false

// 2. Logiacal OR (||)
// -> TRUE if either of the operands/boolean values is true. evaluates to false if both are false

console.log(a || b); //true
console.log(b || b); //false
console.log(c > 2 || c < 2); //true

// 3. Logical NOT (!)
// -> TRUE if the operands if false and vice-versa

console.log(a); //true
console.log(!a); //false
console.log(b); //false
console.log(!b); //true

let password = "asim-kamal";

if (password.length >= 8 && password.includes("asim")) {
  console.log("Valid Password");
} else {
  console.log("Invalid Password");
}
