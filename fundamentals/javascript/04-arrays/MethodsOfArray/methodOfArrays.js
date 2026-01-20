const fruits = [
  "apples",
  "pomegranate",
  "mango",
  "strawberries",
  "pineapple",
  "grapefruit",
];

// Push Method
console.log(fruits.length); //6
fruits.push("kiwi"); //add new element at the last of an array
console.log(fruits);
console.log(fruits.length); //7

// Pop Method
fruits.pop(); //removes the last element from an array
console.log(fruits);
console.log(fruits.length); //6

// Shift Method
fruits.shift(); //removes the first element from an array
console.log(fruits);
console.log(fruits.length); //5

// Unshift Method
fruits.unshift("oranges"); //Elements to insert at the start of the array.
console.log(fruits);
console.log(fruits.length); //6
