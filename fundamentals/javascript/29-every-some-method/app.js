const peoples = ["asim", "luqman", "alex"];

// every() checks if ALL elements satisfy the condition
// It returns true only if every single element passes
const res1 = peoples.every((people) => {
  return people.length === 4;
});

// some() checks if AT LEAST ONE element satisfies the condition
// It returns true if one or more elements pass
const res2 = peoples.some((people) => {
  return people.length === 4;
});

console.log(res1); // false
console.log(res2); // true

const songs = [
  { name: "Lucky You", duration: 4.34 },
  { name: "Just Like You", duration: 3.23 },
  { name: "The Search", duration: 2.33 },
  { name: "Old Town Road", duration: 1.43 },
  { name: "The Box", duration: 5.23 },
];

// Check if every song has duration greater than 3 minutes
const everyRes = songs.every((song) => {
  return song.duration > 3;
});

console.log(everyRes); // false

// Check if at least one song has duration greater than 3 minutes
const someRes = songs.some((song) => {
  return song.duration > 3;
});

console.log(someRes); // true
