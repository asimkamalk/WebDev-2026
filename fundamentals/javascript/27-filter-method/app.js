// The filter() method is a built-in array method in JavaScript that allows you to create a new array containing elements that pass a certain condition. It provides a clean and concise way to filter out elements from an array based on a specified criteria.

// Using filter() to get songs longer than 3 minutes
const songs = [
  { name: "Lucky You", duration: 4.34 },
  { name: "Just Like You", duration: 3.23 },
  { name: "The Search", duration: 2.33 },
  { name: "Old Town Road", duration: 1.43 },
  { name: "The Box", duration: 5.23 },
];

// filter() returns a NEW array containing only items that match the condition
const songDuration = songs.filter((song) => {
  return song.duration > 3;
});

console.log(songDuration); // Songs with duration greater than 3

// Example 2
// Filtering computer specs based on RAM size

const computerSpecs = [
  { ram: 4, hdd: 200 },
  { ram: 8, hdd: 500 },
  { ram: 16, hdd: 600 },
  { ram: 32, hdd: 700 },
  { ram: 64, hdd: 800 },
];

// Returns only computers with RAM greater than 16GB
console.log(computerSpecs.filter((specs) => specs.ram > 16));
