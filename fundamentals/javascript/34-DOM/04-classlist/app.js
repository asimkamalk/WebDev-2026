// classlist
// add()
// remove()
// toggle()

// Selecting the first <h1> element from the DOM (Document Object Model)
// querySelector() returns the first element that matches the CSS selector
const h1 = document.querySelector("h1");

// Uncomment to see all classes currently applied to the h1 element
// console.log(h1.classList);

// Adds a class called "styles" to the h1 element
// h1.classList.add("styles");

// Removes the class called "styles" from the h1 element
// h1.classList.remove("styles");

// toggle() adds the class if it doesn't exist, removes it if it does exist
// This is like an on/off switch for CSS classes
h1.classList.toggle("styles");

// Logs the current classes on the h1 element after toggle
// Will show "styles" if it was added, or empty if it was removed
console.log(h1.classList);
