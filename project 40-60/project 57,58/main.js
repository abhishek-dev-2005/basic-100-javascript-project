let threeTableContainer = document.querySelector(".three-table");
let fiveTableContainer = document.querySelector(".five-table");

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    threeTableContainer.innerHTML += i + "<br>";
  }
}
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    fiveTableContainer.innerHTML += i + "<br>";
  }
}
