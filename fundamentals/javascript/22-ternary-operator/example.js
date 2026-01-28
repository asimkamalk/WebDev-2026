// If person have money they can "Buy Products"
// If the person don't have any money "They Should Bring Money"

// Using the ternary operator to check if a person has money.
// If 'personMoney' is true, 'haveMoney' will be "Buy Products".
// Otherwise, it will be "They Should Bring Money".
const personMoney = true;

const haveMoney =
  personMoney === true ? "Buy Products" : "They Should Bring Money";

console.log(haveMoney); // Output: Buy Products
