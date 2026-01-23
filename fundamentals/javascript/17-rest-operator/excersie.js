// Create a function which will take unlimited amount of parameters & log all of that params to the console.

// Function 'userInfo' demonstrates the rest operator and how to handle multiple arguments
function userInfo(...user) {
  // The '...user' rest parameter collects all arguments into an array called 'user'

  // Using join() to print all elements of the array in a single line, separated by commas
  console.log(`User Info: ${user.join(", ")} `);
  // Output: User Info: Asim Kamal, 22, Web Developer

  // Using forEach to loop through each element of the 'user' array individually
  user.forEach((item) => {
    // 'users' represents each element in the 'user' array during the loop
    console.log(`User info: ${item}`);
    // Output:
    // User info: Asim Kamal
    // User info: 22
    // User info: Web Developer
  });
}

// Calling the function with multiple arguments
userInfo("Asim Kamal", 22, "Web Developer");
