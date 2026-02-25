// Classes are one of the features introduced in the ES6 version of JavaScript.
// A class is a blueprint for the object. You can create an object from the class.

// You can think of the class as a sketch (prototype) of a house. It contains all the details about the floors, doors, windows, etc. Based on these descriptions, you build the house.

// Since many houses can be made from the same description, we can create many objects from a class.

// Class Declaration

class Person {
  constructor(firstName, lastName, age) {
    // Instance Members
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    // Instance Methods
    this.printUserInfo = function () {
      return `Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`;
    };
  }
  // Prototype Members
  greet() {
    return `Hello there! ${this.firstName} ${this.lastName}`;
  }
}

// Inheritance
class Programmer extends Person {
  constructor(firstName, lastName, age, pl, experience) {
    super(firstName, lastName, age); //this just calls the parent call constructor
    this.pl = pl;
    this.experience = experience;
  }
}

// const asim = new Person("Asim", "Kamal", 22);

// console.log(asim);
// console.log(asim.printUserInfo());
// console.log(asim.greet());

const programmer1 = new Programmer("John", "Doe", 18, "Python", 2);

console.log(programmer1);
console.log(programmer1.printUserInfo());
console.log(programmer1.greet());
