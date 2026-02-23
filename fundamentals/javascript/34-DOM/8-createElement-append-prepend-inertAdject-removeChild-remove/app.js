// ------------------------------------
// createElement()
// appendChild()
// insertBefore()
// append()
// prepend()

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()
// ------------------------------------

// Creating Element
const body = document.body;
const h1 = document.createElement("h1");
h1.textContent = "Hello World";
h1.classList.add("greetings");
console.log(h1);
body.appendChild(h1);

const ul = document.querySelector("ul");
const newLi = document.createElement("li");
newLi.innerText = "I am li tags";
ul.appendChild(newLi);

// insertBefore()
const firstLi = document.querySelector("li");
// selector.insertBefore(what, where)
ul.insertBefore(newLi, firstLi);

// insertAdjacentElement

const firstP = document.querySelector("p");
const i = document.createElement("i");
i.innerText = "I am italics";
i.style.color = "skyblue";

firstP.insertAdjacentElement("afterbegin", i);
firstP.insertAdjacentElement("afterbegin", i);
firstP.insertAdjacentElement("beforeend", i);
firstP.insertAdjacentElement("afterend", i);

// append

let section = document.querySelector("section");
const seocndI = document.createElement("i");

seocndI.innerText = "Hello again";
seocndI.color = "green";

const span = document.createElement("span");
span.innerHTML = "<span>This is span </span>";
span.style.color = "violet";

section.append(seocndI);
section.append(span);

// prepend
// section.prepend(span);

// Remove Child

const newList = document.querySelector(".new-list");
const four = document.querySelector(".four");
newList.removeChild(four);

// Remove all

newList.remove();
