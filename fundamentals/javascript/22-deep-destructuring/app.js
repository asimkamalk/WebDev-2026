// Complex data object (like a real API response)
const data = {
  user: {
    id: 123,
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    address: {
      city: "New York",
      country: "USA",
    },
    hobbies: ["Reading", "Painting", "Cooking"],
    scores: {
      math: 95,
      science: 88,
      history: 75,
    },
  },
  products: [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
  ],
  settings: {
    darkMode: true,
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    language: "English",
  },
};

// ===============================
// Deep Object & Array Destructuring
// ===============================
const {
  // Destructuring the 'user' object
  user: {
    name, // user.name
    age, // user.age
    email, // user.email

    // Nested object destructuring
    address: {
      city, // user.address.city
      country, // user.address.country
    },

    hobbies, // user.hobbies (array)

    // Nested object destructuring
    scores: {
      math, // user.scores.math
      science, // user.scores.science
      history, // user.scores.history
    },
  },
  // Destructuring array of products
  // Each variable gets one object from the array
  products: [product1, product2, product3],
  // Destructuring the settings object
  settings: {
    darkMode, // settings.darkMode

    // Nested object with renaming
    notifications: {
      email: emailNotification, // renamed from email
      sms: smsNotification, // renamed from sms
      push: pushNotification, // renamed from push
    },

    language, // settings.language
  },
} = data;

// ===============================
// Using the destructured variables
// ===============================
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Address: ${city} ${country}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);

console.log(`Math Score: ${math}`);
console.log(`Science Score: ${science}`);
console.log(`History Score: ${history}`);

console.log(`Product 1: ${product1.name} - ${product1.price}`);
console.log(`Product 2: ${product2.name} - ${product2.price}`);
console.log(`Product 3: ${product3.name} - ${product3.price}`);

console.log(`Dark Mode: ${darkMode}`);
console.log(`Email Notification: ${emailNotification}`);
console.log(`SMS Notification: ${smsNotification}`);
console.log(`Push Notification: ${pushNotification}`);
console.log(`Language: ${language}`);

// Output:
// Name: John Doe
// Age: 30
// Address: New York USA
// Hobbies: Reading, Painting, Cooking
// Math Score: 95
// Science Score: 88
// History Score: 75
// Product 1: Laptop - 1000
// Product 2: Phone - 800
// Product 3: Tablet - 500
// Dark Mode: true
// Email Notification: true
// SMS Notification: false
// Push Notification: true
// Language: English
