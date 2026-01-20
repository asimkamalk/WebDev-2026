const programmingLangugaes = ["JavaScript", "Golang", "Python", "Rust"];
const numbers = [5, 3, 4, 1, 2];

console.log(programmingLangugaes.includes("Golang")); //true
console.log(programmingLangugaes.includes("Java")); //false

console.log(programmingLangugaes.join("-")); //JavaScript-Golang-Python-Rust
console.log(programmingLangugaes.join(" ")); //JavaScript Golang Python Rust

console.log(programmingLangugaes);

//Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
console.log(programmingLangugaes.slice(0, 2)); //[ 'JavaScript', 'Golang' ]

// Reverse Method
console.log(programmingLangugaes.reverse());

// Sort Method
console.log(numbers); //[ 5, 3, 4, 1, 2 ]
console.log(numbers.sort()); //[ 1, 2, 3, 4, 5 ]
