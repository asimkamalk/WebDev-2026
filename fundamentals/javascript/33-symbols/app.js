const mySymbol = Symbol("My Custom Symbol");
console.log(mySymbol);
console.log(typeof mySymbol);

// Comparing Symbols
const mySymbol1 = Symbol("name");
const mySymbol2 = Symbol("name");

console.log(mySymbol1 === mySymbol2);

const obj = {};
obj[mySymbol1] = "value 1";
obj[mySymbol2] = "value 2";

console.log(obj);
