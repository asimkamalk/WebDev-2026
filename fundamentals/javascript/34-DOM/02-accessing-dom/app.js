// DOM Selectors

// 1. getElementsByTagName
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("h1").length);

// 2. getElementsById
console.log(document.getElementById("main"));

// 3. getElementsByClassName
console.log(document.getElementsByClassName("cls"));
// 4. querySelector
console.log(document.querySelector(".cls-1"));
console.log(document.querySelector("#id-1"));

// 5. querySelectorAll
console.log(document.querySelectorAll("li"));
console.log(document.querySelectorAll("li").length);

// Storing Data in Variable
let h1 = document.querySelector("h1");
console.log(h1);
