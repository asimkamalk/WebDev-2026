// console.log(window);
// console.log(this); //window object

// console.log(this === window); //true

// window.firstName = "Asim";
// this.lastName = "Kamal";
// console.log(this);

// Using this Keyword in a function

// function printThis() {
//   return this; //window
// }

// const res = printThis();
// console.log(res); //window

// this keyword in a object

// const obj = {
//   firstName: "Asim",
//   lastName: "Kamal",

//   fullName: function () {
//     // return this; //own object
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// const res = obj.fullName();
// console.log(res); //Asim Kamal

// Using an arrow function

const obj = {
  firstName: "Asim",
  lastName: "Kamal",

  fullName: () => {
    // return this; //window
    return `${this.firstName} ${this.lastName}`;
  },
};

const res = obj.fullName();
console.log(res); //undefined undefined
