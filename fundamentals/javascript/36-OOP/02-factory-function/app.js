// A factory function is a type of function that is used to create and return objects. It's a design pattern that provides an alternative way to create objects compared to using constructors and the new keyword.

// let asim = {
//   firstName: "Asim",
//   lastName: "Kamal",
//   fullName: function () {
//     console.log(
//       `Hello my name is ${this.firstName} ${this.lastName} & I love JS`,
//     );
//   },
// };

// let alex = {
//   firstName: "Alex",
//   lastName: "Mead",
//   fullName: function () {
//     console.log(
//       `Hello my name is ${this.firstName} ${this.lastName} & I love JS`,
//     );
//   },
// };

// Factory Function

function createPerson(firstName, lastName, pl) {
  return {
    // Both method works
    // firstName: firstName,
    // lastName: lastName,
    // pl: pl,

    firstName,
    lastName,
    pl,

    intro: function () {
      console.log(
        `Hello my name is ${this.firstName} ${this.lastName} and I love ${this.pl}`,
      );
    },
  };
}

const asim = createPerson("Asim", "Kamal", "JavaScript");

const john = createPerson("John", "Doe", "Python");

asim.intro();
john.intro();
