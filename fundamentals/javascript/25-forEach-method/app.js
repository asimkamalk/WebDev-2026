// When we call the forEach helper, we pass an anonymous callback function.
// This function runs once for every element in the array.
// Whatever logic is inside the callback is executed for each item.

const colors = ["teal", "blue", "red", "green"];

// Traditional for loop (commented out for comparison)
// for (let i = 0; i <= colors.length - 1; i++) {
//   console.log(colors[i]);
// }

// Using forEach to log each color in the array
colors.forEach((color) => console.log(color));

// Example 2
// Capitalizing the first letter of each word using forEach.
// 'word' is the current item, 'index' is its position,
// and 'arr' refers to the original array.
const words = ["hello", "bird", "table", "football", "pipe", "code"];

const capWords = words.forEach((word, index, arr) => {
  // Replace each word in the array with its capitalized version
  arr[index] = word[0].toUpperCase() + word.substring(1);
});

// forEach does not return a new array, it modifies the original one
console.log(words); // Output: ["Hello", "Bird", "Table", "Football", "Pipe", "Code"]
