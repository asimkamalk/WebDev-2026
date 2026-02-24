// Constructor functions in JavaScript are regular functions used with the new keyword to create and initialize objects with shared properties and methods. They act as blueprints for creating multiple instances of objects with the same structure and behavior.

function CreatePeople(firstName, lastName, pl) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.pl = pl;

  this.info = function () {
    console.log(
      `My name is ${this.firstName} ${this.lastName} and I love ${this.pl}`,
    );
  };
}

// NEW KEYWORD:
// 1. First create empty object {}
// 2. Sets "this" to point to that object
// 3. We can omit the return statement using "new" keyword

const john = new CreatePeople("John", "Doe", "Golang");

const asim = new CreatePeople("Asim", "Kamal", "JavaScript");
// console.log(john);
// console.log(asim);
john.info();
asim.info();

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.bookInfo = function () {
    console.log(`${this.title} was written by ${this.author} in ${this.year}`);
  };
}

let book1 = new Book("Rich Dad Poor Dad", "Robert Kiyosaki", 1997);
let book2 = new Book("Atomic Habits", "James Clear", 2018);
book1.bookInfo();
book2.bookInfo();
