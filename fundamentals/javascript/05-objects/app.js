// Objects {key: value}
// {id: 1, user: asim}

const emptyObj = {};
console.log(emptyObj); //{}

const person = {
  firstName: "Asim",
  lastName: "Kamal",
  birthYear: 2003,
  location: ["Peshawar", "Pakistan"],
  isProgrammer: true,
  "is graduated": true,
};

// Checking type
console.log(typeof person); //object
// The type of array in JS is also object
const arr = [1, 2, 3, 4, 5];
console.log(typeof arr); //object

// Accessing properties
// 1. Dot Notation
console.log(person); //{ firstName: 'Asim', lastName: 'Kamal', birthYear: 2003 }
console.log(person.firstName); //Asim
console.log(person.lastName); //Kamal
console.log(person.birthYear); //2003
console.log(person.location); //["Peshawar", "Pakistan"]
console.log(person.isProgrammer); //true

// 2. Bracket Notation //Allow spaces
console.log(person["is graduated"]);
// console.log(person["birthYear"]);

// Using variables to access properties
let properyToAccess = "location";
console.log(person[properyToAccess]); //["Peshawar", "Pakistan"]
let accessFirstName = "firstName";
console.log(person[accessFirstName]); //Asim

// Person2

const person2 = {
  fullName: "Asim Kamal",
};

// Inserting new object
person2.occupation = "Web Dev";
person2.hobby = "Coding";
person2.age = 22;

// Removing an object
delete person2.age;
delete person2.fullName;

console.log(person2); //{ occupation: 'Web Dev', hobby: 'Coding' }
