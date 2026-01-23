const person = {
  name: "John Doe",
  age: 30,
  gender: "male",
  country: "USA",
};
// Your task is to use object destructuring to extract the name, age, and country properties from the person object.
// After extracting the properties, log each variable's value to the console.

// Order does not matter key name matters
const { country, name, age } = person;
console.log(name); //John Doe
console.log(age); //30
console.log(country); //USA
