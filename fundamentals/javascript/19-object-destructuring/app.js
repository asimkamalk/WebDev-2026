// In object destructuring, ORDER does NOT matter
// but PROPERTY NAMES must MATCH the object keys

// Student object
const student = {
  name: "Asim",
  university: "UET Peshawar",
  gpa: 3,
  regNo: "21JZBCS0145",
  campus: "Jalozai",
};

// ✅ Traditional way to access object properties
const tradionalMethodName = student.name;
console.log(tradionalMethodName); // Asim

// ✅ Object Destructuring
// Extracting properties directly into variables
// Variable names MUST match the object property names
const { name, gpa, regNo, color1 } = student;

// Accessing destructured values
console.log(name); // Asim
console.log(gpa); // 3
console.log(regNo); // 21JZBCS0145

// 'color1' does not exist in the student object
// So its value becomes undefined
console.log(color1); // undefined

// ✅ Object destructuring with variable renaming
// Object with numeric properties
const num = {
  x: 100,
  y: 200,
  z: 300,
};

// x is extracted and renamed to value1
// y is extracted and renamed to value2
// z is extracted and renamed to value3
const { x: value1, y: value2, z: value3 } = num;

// Accessing the renamed variables
console.log(value1); // 100
console.log(value2); // 200
console.log(value3); // 300

// Object destructuring and rest operator
console.log("Object destructuring and rest operator\n");

let { a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 };
console.log(rest); //{ c: 300, d: 400, e: 500 }
