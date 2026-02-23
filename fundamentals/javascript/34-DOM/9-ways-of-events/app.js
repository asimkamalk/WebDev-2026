// ----------- BAD WAY-----------
const secondBtn = document.querySelector(".second-btn");
// secondBtn.onclick = alert("Asim");
secondBtn.onclick = function () {
  alert("Asim");
};

// ----------- GREAT WAY-----------
const best = document.querySelector(".best");
function greet() {
  console.log("Hello User");
}
best.addEventListener("click", greet);

// ----------- Event (e) Object -----------

const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input.value);
});
