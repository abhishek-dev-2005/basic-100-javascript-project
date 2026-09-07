let print = document.querySelector(".container");

print.addEventListener("click", () => {
  let rows = Number(prompt("Enter stars value:"));

  let rowStr = "";
  let num = 1;

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
      rowStr += num + " ";
      num++;
    }
    rowStr += "<br>";
  }

  print.innerHTML = rowStr;
});
