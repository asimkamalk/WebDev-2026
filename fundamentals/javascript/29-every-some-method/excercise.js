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

// Do all products have category of books?
// every() returns true only if ALL products have category "Books"
let allProductsBooks = products.every((product) => {
  return product.category === "Books";
});

console.log(allProductsBooks); // false (only 2 out of 5 products are Books)

// Do some products have category of books?
// some() returns true if AT LEAST ONE product has category "Books"
let someProductsBooks = products.some((product) => {
  return product.category === "Books";
});
console.log(someProductsBooks); // true (Harry Potter and Rich Dad Poor Dad)
