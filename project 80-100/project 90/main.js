let print = document.querySelector(".container");

print.addEventListener("click", () => {
  let rows = Number(prompt("Enter stars value:"));
  if (!rows || rows <= 0) return;
  let rowStr = "";

  for (let i = 1; i <= rows; i++) {
    let char = String.fromCharCode(64 + i);

    for (let j = 1; j <= 2 * i - 1; j++) {
      rowStr += char + " ";
    }
    rowStr += "<br>";
  }

  print.innerHTML = rowStr;
});
