// 1. Create object name (car)
// 2. add (type, model, color) as properties
// 3. check the type of object
// 4. Update the type property to "Toyota"
// 5. Add new property wheels
// 6. log car to the console.

const car = {
  type: "civic",
  model: 2026,
  color: "black",
};

console.log(typeof car); //object

// Updating the existing object
car.type = "toyota";
car.wheels = 4;

console.log(car); //{ type: 'toyota', model: 2026, color: 'black', wheels: 4 }
