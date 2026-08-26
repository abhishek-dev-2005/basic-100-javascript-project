let container = document.querySelector(".table-container");
let output = "";
let n = Number(prompt("jitane tak ka table chahte ho otna number enter karo"));
for (let i = 1; i <= n; i++) {
  output += `<h3>table of ${i}</h3>`;
  for (let j = 1; j <= 10; j++) {
    output += `${i}*${j} = ${i * j} <br>`;
  }
  output += "<hr>";
}

container.innerHTML = output;
