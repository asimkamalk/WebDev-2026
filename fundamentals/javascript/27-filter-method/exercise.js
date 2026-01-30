// Exercise 1
// Iterate over the "ages" array and print only adults (age >= 18)

const ages = [32, 10, 33, 16, 40, 18, 25];

// Function that checks if age is 18 or above
function adults(age) {
  return age >= 18;
}

// filter() returns a new array containing only adult ages
const result = ages.filter(adults);

console.log(result); // Output: [32, 33, 40, 18, 25]

// Exercise 2
// Iterate over the "words" array
// Print only words whose length is greater than 6

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

// filter() keeps only words with length greater than 6
console.log(
  words.filter((char) => {
    return char.length > 6;
  }),
); // Output: ["exuberant", "destruction", "present"]
