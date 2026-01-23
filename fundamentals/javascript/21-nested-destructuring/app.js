// Array of song objects
const songs = [
  {
    id: 1,
    name: "Clay",
    singer: "Ghostly Kisses",
    duration: 4.39,
  },
  {
    id: 2,
    name: "Purpose Rap",
    singer: "Young Stunners",
    duration: 3.17,
  },
  {
    id: 3,
    name: "Sitaare",
    singer: "Arijit Singh",
    duration: 4.03,
  },
  {
    id: 4,
    name: "Summertime Sadness",
    singer: "Lana Del Rey",
    duration: 4.25,
  },
  {
    id: 5,
    name: "Timeless",
    singer: "The Weekend",
    duration: 4.16,
  },
];

// ✅ Array + Object Destructuring
// Skip the first three elements in the array
// Then destructure the 4th object to extract its 'singer' property
const [, , , { singer }] = songs;

// Prints the singer of the 4th song
console.log(singer); // Lana Del Rey
