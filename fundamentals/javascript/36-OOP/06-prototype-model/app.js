// Every javascript object has a anonymous property called prototype
// Remember functions & arrays are also a object
// that prototype will be the parent of that object, prototype property is object by itself, which have some special properties & methods

// Every object is associated with another object.
// The object (obj) is associated with [[Prototype]] Object
// -> which means obj object will inherit all properties of Object.prototype || [[Prototype]]

// We can check the prototype of something in 3 ways:
// --> obj.__proto__
// --> obj.constructor.prototype
// --> Object.getPrototypeOf(a)

// ********* Checking the Prototype
// const obj = {};
// console.log(obj.__proto__);
// console.log(obj.__proto__.__proto__);

// const arr = new Array();
// console.log(arr);

function User(firstName, lastName, language) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.language = language;
}

const user1 = new User("Asim", "Kamal", "English");
// console.log(user1.__proto__);
// console.log(user1.__proto__.__proto__);

// Changing the built in Method
// console.log(Array.prototype);

// Array.prototype.pop = function () {
//   return `Pop it up`;
// };

// const myArr = ["one", "two", "three"];

// let pop = myArr.pop();
// console.log(pop);

// Defining own method

String.prototype.hello = function () {
  console.log(this);
  console.log(this.toUpperCase());
};

console.log("hello and welcome".hello());

const array = ["hello", "yellow"];
console.log(array);
