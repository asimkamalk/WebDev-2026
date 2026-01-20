// Empyty array
const myList = [];
console.log(myList); //[]

const numbers = [1, 2, 3, 4, 5];
console.log(numbers); //[1, 2, 3, 4, 5]

const stringArr = ["eat", "sleep", "code", "repeat"];
console.log(stringArr); // ["eat", "sleep", "code", "repeat"]

// Accessing items from our array
console.log(stringArr[0]); // eat
console.log(stringArr[1]); // sleep

// Nested Arrays || Two dimensional
// ->Array inside an array
const nestArr = ["one", ["two", "three"], 1, true, false];
console.log(nestArr); // [ 'one', [ 'two', 'three' ], 1, true, false ]

// Accessing Nested array
console.log(nestArr[1][0]); // two
console.log(nestArr[1][1]); // three

const myLetters = ["h", "e", "l", "l", "o"];
console.log(myLetters); // [ 'h', 'e', 'l', 'l', 'o' ]
