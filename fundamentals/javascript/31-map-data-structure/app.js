const map = new Map();

const keyOne = "string";
const keyTwo = {};
const keyThree = function () {};

map.set(keyOne, "Value of key one");
map.set(keyTwo, "Value of key two");
map.set(keyThree, "Value of key three");

// console.log(map.keys());
// console.log(map.values());
// console.log(map.delete(keyTwo));
// console.log(map.size);

// console.log(map);

// for (let [key, value] of map) {
//   console.log(`${key} -- ${value}`);
// }

// for (let key of map.keys()) {
//   console.log(key);
// }

for (let value of map.values()) {
  console.log(value);
}
