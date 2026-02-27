// Superclass
class Animal {
  constructor(name) {
    this.name;
  }

  makeSound() {
    return "Unknown Sound";
  }
}

// Subclass inheriting from a Animal

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  makeSound() {
    return "Woof";
  }
}

const genericAnimal = new Animal("Generic Animal");

console.log(genericAnimal.makeSound());

const dog = new Dog("buddy");
console.log(dog.makeSound());
