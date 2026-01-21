// JSON JavaScript Object Notation
// JSON example in data.json file

const person = {
  name: "John Doe",
  age: 20,
  email: "email@example.com",
  isSubscribe: true,
  hobbies: ["Reading", "Running", "Cooking"],
  address: {
    city: "New York",
    CurrentlyLiving: true,
  },
};

// JSON.stringify()

const PersonJSON = JSON.stringify(person);
console.log(PersonJSON);
// {"name":"John Doe","age":20,"email":"email@example.com","isSubscribe":true,"hobbies":["Reading","Running","
// Cooking"],"address":{"city":"New York","CurrentlyLiving":true}}

// JSON.parse()

const PersonObj = JSON.parse(PersonJSON);
console.log(PersonObj);
// {
//   name: 'John Doe',
//   age: 20,
//   email: 'email@example.com',
//   isSubscribe: true,
//   hobbies: [ 'Reading', 'Running', 'Cooking' ],
//   address: { city: 'New York', CurrentlyLiving: true }
// }
