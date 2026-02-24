// Built-in constructors, also known as native constructors, are standard constructors provided by JavaScript that allow you to create objects of various data types. These constructors are available globally and do not need to be explicitly defined. They provide a convenient way to create instances of primitive data types and built-in objects.

// Number
const num1 = new Number(10);
// const num2 = 20;
console.log(num1); //[Number: 10]
// console.log(typeof num1); //object
// console.log(typeof num2); // number

// String
const str1 = new String("Asim");
console.log(str1);
console.log(str1[0]); //A
console.log(str1[1]); //s
console.log(str1[2]); //i
console.log(str1[3]); //m

// Boolean
const bool1 = new Boolean(false);
const bool2 = new Boolean(true);
console.log(bool1); //[Boolean: false]
console.log(bool2); //[Boolean: true]

// Array
const arr1 = new Array(1, 2, 3);
console.log(arr1); //[ 1, 2, 3 ]
console.log(typeof arr1); //object
