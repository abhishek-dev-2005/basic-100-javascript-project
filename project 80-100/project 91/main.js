let print = document.querySelector(".container");

print.addEventListener("click", () => {
  let rows = Number(prompt("Enter stars value:"));
  if (!rows || rows <= 0 || rows > 26) return;
  let rowStr = "";

  for (let i = rows; i >= 1; i--) {
    let char = String.fromCharCode(65 + (rows - i));

    for (let j = 1; j <= 2 * i - 1; j++) {
      rowStr += char + " ";
    }
    rowStr += "<br>";
  }

  print.innerHTML = rowStr;
});
