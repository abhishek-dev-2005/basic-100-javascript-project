let print = document.querySelector(".container");

print.addEventListener("click", () => {
  let rows = Number(prompt("Enter stars value:"));
  if (!rows || rows <= 0) return;
  let rowStr = "";

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
      let char = String.fromCharCode(64 + j);
      rowStr += char + "  ";
    }
    rowStr += "<br>";
  }

  print.innerHTML = rowStr;
});
