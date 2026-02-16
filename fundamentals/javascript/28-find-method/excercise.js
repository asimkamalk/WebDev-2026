// Array of ages
const ages = [2, 10, 15, 18, 20];

// find() returns the FIRST element that satisfies the condition
// Here we check for the first age that is >= 18
const checkAges = ages.find((age) => {
  return age >= 18;
});

console.log(checkAges);
// Output: 18 (NOT 20)
// Because find() stops at the first match

// ---------------------------------------------

// Array of product objects
let products = [
  {
    name: "Checkers",
    category: "Toy",
  },
  {
    name: "Harry Potter",
    category: "Books",
  },
  {
    name: "Iphone",
    category: "Electronics",
  },
  {
    name: "Learn React",
    category: "Technology",
  },
  {
    name: "Rich Dad Poor Dad",
    category: "Books",
  },
];

// Using find() to get the FIRST product
// where category is "Books"
let checkCategory = products.find((product) => {
  return product.category === "Books";
});

console.log(checkCategory);

// Output:
// { name: "Harry Potter", category: "Books" }
// Because it is the first product in the array
// that matches the condition
