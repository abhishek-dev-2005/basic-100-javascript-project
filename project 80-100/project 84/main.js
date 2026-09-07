let print = document.querySelector(".container");
print.addEventListener("click", () => {
  let rows = Number(prompt("enter your stars value"));
  let rowStr = "";
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= rows; j++) {
      if (i === 1 || i === rows || j === 1 || j === rows) {
        rowStr += "*";
      } else {
        rowStr += "&nbsp;&nbsp;&nbsp;";
      }
    }
    rowStr += "<br>";
  }
  print.innerHTML = rowStr;
});
