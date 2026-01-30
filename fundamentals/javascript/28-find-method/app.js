// The find() method is another built-in array helper in JavaScript that allows you to find the first element in an array that matches a specific condition. It returns the value of the first element that satisfies the given testing function, or undefined if no element is found.

// Using find() to get the FIRST person whose name is "waqas"
const peoples = [
  {
    name: "asim",
    age: 22,
  },
  {
    name: "waqas",
    age: 26,
  },
  {
    name: "shaheer",
    age: 24,
  },
  {
    name: "waqas",
    age: 30,
  },
];

// find() returns only the FIRST matching object
const res = peoples.find((person) => person.name === "waqas");

console.log(res); // Output: { name: "waqas", age: 26 }

// Example 2
// Finding the first pos
