console.log("Asim Kamal");
console.log(2 + 2);
console.log({ name: "Asim" });

console.warn("This is warning"); //Will print in yellow

// Table
console.table({ name: "Asim", age: "23" });

console.clear();

// Comments
// console.log("Hello World");

// Variables
// Pseudo Code
// (reserved keyword) (variable name) (type of value)
// var const or let

// Decalred Variable
let name;
console.log(name); //undefined

// String
// -> Assigning Variable
let banana;
banana = "Yellow";
console.log(banana); //Yellow

// String
let firstName = "Asim";
console.log(firstName); //Asim

// Number
let number = 10;
console.log(number); //10

// Convention of writing variables
// let var = "vairable"
// console.log(var); //ERROR can not assign reserved keywords

// let first name = "myname" NO SPACE allowed

//Camel Case
const lastName = "Kamal";
console.log(lastName); //Kamal

// let 20age = 20 NO NUMBER before variable
let age20 = 20; //Valid after variable no space
console.log(age20); //20

// let last-name = "Kamal" ERROR you can use -(Hyphen)

// Snake Case variable
const first_name = "Asim";
console.log(first_name); //Asim

const $myCity = "Peshawar"; //Valid Dollar can be assign before but not after
console.log($myCity); //Peshawae"

const PI = 3.14; //Uppercase is also valid
console.log(PI); //3.14

// Changing let variable values

let favColor = "black";
console.log(favColor); //black

favColor = "blue";
console.log(favColor); //blue

// You can not change value with const

// const favCountry = "USA";
// favCountry = "UK"; //TypeError: Assignment to constant variable.
// console.log(favCountry); //USA
