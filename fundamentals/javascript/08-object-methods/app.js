// function greet() {
//   console.log(
//     `Hello, my name is ${person.name} & I am ${person.age} years old`,
//   );
// }

// const person = {
//   name: "John",
//   age: 30,
//   greet,
// };

// console.log(person.greet());

const person = {
  name: "Asim",
  age: 22,
  greet: function () {
    return `Hello, my name is ${person.name} & I am ${person.age} years old`;
  },
};

console.log(person.greet()); //Hello, my name is Asim & I am 22 years old
