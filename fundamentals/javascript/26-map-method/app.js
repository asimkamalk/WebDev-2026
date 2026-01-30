// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

let number = [1, 2, 3, 4, 5];

let double = number.map((num) => num * 2);
console.log(double);

console.log(number);

// example 2
let people = [
  {
    firstName: "Asim",
    lastName: "Kamal",
  },
  {
    firstName: "Muhammad",
    lastName: "Waqas",
  },
  {
    firstName: "Adil",
    lastName: "Khan",
  },
];

const results = people.map((person) => {
  return [person.firstName, person.lastName];
});

console.log(results);
