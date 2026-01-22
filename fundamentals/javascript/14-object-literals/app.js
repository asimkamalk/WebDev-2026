// Enhanced object literals, introduced in ECMAScript 6 (ES6), are a set of enhancements to the syntax for defining objects in JavaScript. These enhancements make it more convenient and concise to define object properties and methods

const user = (name, age, work) => {
  return {
    // This function uses ES6 Enhanced Object Literals for a more concise syntax:
    // 1. Property Shorthand: If a variable name is the same as the object key (e.g., 'age' and 'work'),
    //    you can just write the variable name instead of 'key: value' (e.g., 'age: age').
    // 2. Method Shorthand: You can define methods without the 'function' keyword.
    name: name,
    age,
    work,
    info: () => {
      return `My name is ${name}, I am ${age} years old and I am ${work}`;
    },
  };
};

const asim = user("Asim", 22, "Programmer");
console.log(asim.info()); //My name is Asim, I am 22 years old and I am Programmer
