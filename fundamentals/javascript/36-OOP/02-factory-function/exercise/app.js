// create a factory function that generates different types of vehicles. Each vehicle object should have properties like type, brand, model, and year.

function createVehicle(type, brand, model, year) {
  return { type, brand, model, year };
}

const vehicle1 = createVehicle("Car", "Toyota", "Camry", 2022);
const vehicle2 = createVehicle("Car", "Honda", "Civic", 2021);
const vehicle3 = createVehicle("Motorcycle", "Honda", "CBR500R", 2019);

console.log(vehicle1);
console.log(vehicle2);
console.log(vehicle3);
