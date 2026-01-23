// Extract values from objects

const person1 = {
  firstName: "Asim",
  lastName: "Kamal",
  age: 22,
  job: "Web Developer",
};

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 30,
};

// Value extracted can have default values
const { firstName, lastName, age, job = "Unemployed" } = person2;
console.log(firstName); //Patrick
console.log(lastName); //Star
console.log(age); //30
console.log(job); // Unemployed
