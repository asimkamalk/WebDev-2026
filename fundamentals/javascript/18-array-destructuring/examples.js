// Swap the value of two variable

console.log("Swap the value of two variable");

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); //2
console.log(b); //1

// Swap two elements in an array
console.log("Swap two elements in an array");

const colors = ["red", "green", "blue", "white", "black"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors); //[ 'black', 'green', 'blue', 'white', 'red' ]

// Assign array elements to variables
console.log("Assign array elements to variables");

const colors2 = ["red", "green", "blue", "white", "black"];

const [firstColor, secondColor, thirdColor, ...restColors] = colors2;
console.log(firstColor); //red
console.log(secondColor); //green
console.log(thirdColor); //blue
console.log(restColors); //[ 'white', 'black' ]
