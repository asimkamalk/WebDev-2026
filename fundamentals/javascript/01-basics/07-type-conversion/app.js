// Type Conversion

let money = "50";
console.log(typeof money); //string

// Convert String to number
money = parseInt(money);
money = +money;
money = Number(money);
console.log(typeof money); //number

// Convert Number to String

let numb = 100;
console.log(typeof numb); //number

numb = numb.toString();
numb = String(numb);
console.log(numb);
console.log(typeof numb); //string

// Convert a string to decimal

let decimal = "3.14";
console.log(typeof decimal); //string

decimal = parseFloat(decimal);
console.log(decimal); //3.14
console.log(typeof decimal); //number

decimal = +decimal;
console.log(decimal); //3.14
console.log(typeof decimal); //number
