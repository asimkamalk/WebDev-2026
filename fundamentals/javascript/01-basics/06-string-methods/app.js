// Strings

let firstName = "Asim";
let secondName = "Kamal";

// Template literals
// let fullName = `${firstName} ${secondName}`;

// let fullName = firstName + " " + secondName;

console.log(firstName);
console.log(secondName);

console.log(firstName, secondName);

// console.log(fullName);

//1. Concatenation Method

let fullName = firstName.concat(" ", secondName);
console.log(fullName);

// 2.  Append

firstName += " Appending something";
console.log(firstName); //Asim Appending something

// 3. Length
console.log(secondName.length); // 5

// 4. Cases
console.log(secondName.toLowerCase()); //kamal
console.log(secondName.toUpperCase()); //KAMAL

// 5. Slice in string
let str = "Asim Developer";
console.log(str.slice(5, 14)); //Developer

// 6 Split & Join

let str2 = "Asim Kamal";
console.log(str2.split(""));
//[
//   'A', 's', 'i', 'm',
//   ' ', 'K', 'a', 'm',
//   'a', 'l'
// ]

console.log(str2.split("").join("-")); //A-s-i-m- -K-a-m-a-l

// 7. Includes
let country = "Pakistan";
let isInclude = country.includes("Pak");
console.log(isInclude); //true

let checkAnotherCase = country.includes("pak");
console.log(checkAnotherCase); //false

console.log(country.includes("tan")); //true

// 8. Trim

let strTrim = "My name is Asim       ";
console.log(strTrim.trim()); //My name is Asim

// Back Ticks
let desc = `My name is Asim Kamal
I am a web developer
2
4
`;
// My name is Asim
// My name is Asim Kamal
// I am a web developer
// 2
// 4

console.log(desc);

let favColorOne = "Blue";
let favColorTwo = "Black";

console.log(`My favourite colors are ${favColorOne} and ${favColorTwo}`); //My favourite colors are Blue and Black
