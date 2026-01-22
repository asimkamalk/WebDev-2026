// Template strings, also known as template literals, are a feature in JavaScript that allows you to create strings with embedded expressions. They are denoted by backticks `` instead of single or double quotes. Template strings provide a more flexible and concise way to construct strings, especially when they involve variables or expressions.

console.log(`This is some 
random text`); // This is some
// random text

console.log(`${2 + 2}`); //4

const firstName = "Asim";
const lastName = "Kamal";

console.log(`My name is: ${firstName} ${lastName}`); //My name is: Asim Kamal

// Array can also be used
console.log(`${["one", "two, three"]}`); //one,two, three

function info() {
  return "My name is Asim Kamal and I am 22 years old";
}

console.log(`${info}`);
// function info() {
//   return "My name is Asim Kamal and I am 22 years old";
// }

console.log(`${info()}`); //My name is Asim Kamal and I am 22 years old

console.log(info); //[Function: info]
