let display = document.querySelector(".display");
let valueButtons = document.querySelectorAll("button[data-value]");
valueButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.getAttribute("data-value");
    display.value += value;
  });
});
let clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", () => {
  display.value = "";
});

let delBtn = document.querySelector(".del-btn");
delBtn.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});
let equalBtn = document.querySelector(".equal-btn");
equalBtn.addEventListener("click", () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    displau.value = "error";
  }
});
