const person = {
  name: "John Doe",
  age: 30,
  gender: "male",
  country: "USA",
};
// Your task is to use object destructuring to extract the name, age, and country properties from the person object and assign them to separate variables named personName, personAge, and personCountry.

// After extracting the properties, log each variable's value to the console.

const { name: personName, age: personAge, country: personCountry } = person;
console.log(personName); //John Doe
console.log(personAge); //30
console.log(personCountry); //USA
