// href
// value
// type
// getAttribute(attrName)
// setAttribute(attrName, value)

const a = document.querySelector("a");
const input = document.querySelector("input");

// Getting Attributes
// console.log(a.href);
// console.log(input.type);
// console.log(input.value);

// Setting attributes
// a.href = "https://github.com/asimkamalk";
// console.log((input.value = "Hello"));
// console.log((input.type = "password"));
// console.log((input.placeholder = "Enter Password"));

// getAttribute(attrName)
console.log(input.getAttribute("type"));
console.log(input.getAttribute("placeholder"));

// setAttribute(attrName, value)
input.setAttribute("placeholder", "Password");
input.setAttribute("type", "password");
