// const initialValues = [1, 2, 2, 2, 2, 3];
// const mySet = new Set(initialValues);

const mySet = new Set();

mySet.add("apple");
mySet.add("banana");
mySet.add("orange");
// mySet.add("apple");

// console.log(mySet.has("apple"));
// console.log(mySet.has("asim"));

// mySet.delete("banana");

// mySet.clear();
// console.log(mySet);

for (let item of mySet) {
  console.log(item);
}
