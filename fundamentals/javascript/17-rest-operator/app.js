// The rest parameter syntax allows a function to accept an indefinite number of arguments
// as an array, providing a way to represent variadic functions in JavaScript.

// Function 'user' demonstrates the rest operator
function user(name, ...userData) {
  // 'name' will hold the first argument passed to the function
  console.log(name); // Prints: "Asim"

  // 'userData' is an array that collects all remaining arguments
  console.log(userData); // Prints: [22, "Programming", "Cricket"]
}

// Calling the 'user' function with multiple arguments
user("Asim", 22, "Programming", "Cricket");

// Function 'person' demonstrates rest operator with multiple named parameters
function person(firstName, lastName, ...hobbies) {
  // 'firstName' and 'lastName' hold the first two arguments
  console.log(`First Name: ${firstName}`); // Prints: "First Name: Asim"
  console.log(`Last Name: ${lastName}`); // Prints: "Last Name: Kamal"

  // Loop through the rest parameter array 'hobbies' to print each hobby individually
  for (let i = 0; i < hobbies.length; i++) {
    console.log(`Hobby ${i + 1}: ${hobbies[i]}`);
    // Prints:
    // Hobby 1: Programming
    // Hobby 2: Reading
    // Hobby 3: Watching
  }
}

// Calling the 'person' function with multiple hobbies
person("Asim", "Kamal", "Programming", "Reading", "Watching");
