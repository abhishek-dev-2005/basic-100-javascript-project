let print = document.querySelector(".container");

print.addEventListener("click", () => {
  let rows = Number(prompt("Enter stars value:"));

  let rowStr = "";

  for (let i = rows; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      rowStr += j;
    }
    rowStr += "<br>";
  }

  print.innerHTML = rowStr;
});
