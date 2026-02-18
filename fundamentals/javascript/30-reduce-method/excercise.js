const peoples = [
  {
    name: "Asim Kamal",
    age: 22,
  },
  {
    name: "Shaheer",
    age: 25,
  },
  {
    name: "Waqas",
    age: 28,
  },
];

const oldAge = peoples.reduce((p, c) => (c.age > p ? c.age : p), 0);

console.log(oldAge);

const words = [
  "apple",
  "banana",
  "orange",
  "banana",
  "apple",
  "orange",
  "apple",
  "grape",
];

const wordFrequency = words.reduce((frequencyMap, word) => {
  frequencyMap[word] = frequencyMap[word] || 0 + 1;
  return frequencyMap;
}, {});

console.log(wordFrequency);
