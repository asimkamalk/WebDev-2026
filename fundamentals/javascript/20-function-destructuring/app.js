// Person object
const person = {
  name: "Asim",
  age: 22,
  country: "Pakistan",
};

// ❌ Traditional way
// function printPersonInfo(person) {
//   console.log(`Name: ${person.name}`);
//   console.log(`Age: ${person.age}`);
//   console.log(`Country: ${person.country}`);
// }

// ✅ Destructuring directly in function parameters
// The object passed to the function is destructured immediately
function printPersonInfo({ name, age, country }) {
  // 'name', 'age', and 'country' are extracted from the person object
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Country: ${country}`);
}

// Passing the person object
printPersonInfo(person);

// =========================
// Example: Menu configuration
// =========================

// Options object
let options = {
  title: "My menu",
  items: ["item1", "item2"],
};

// Function with advanced destructuring
function showmenu({
  title = "Untitled", // Extract title / // Default value if title is undefined
  width: w = 100, // Rename 'width' to 'w' and set default value
  height: h = 200, // Rename 'height' to 'h' and set default value
  items: [item1, item2], // Nested array destructuring
}) {
  // Using destructured values
  console.log(`${title} ${w} ${h}`);
  console.log(item1);
  console.log(item2);
}

// Calling the function with options object
// width and height are not provided, so default values are used
showmenu(options);
