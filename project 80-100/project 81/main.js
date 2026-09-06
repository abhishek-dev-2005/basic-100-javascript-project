let print = document.querySelector(".container");
print.addEventListener("click", () => {
  let rows = Number(prompt("enter your stars value"));
  let rowStr = "";
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
      rowStr += "*";
    }
    rowStr += "<br>";
  }
  print.innerHTML = rowStr;
});
