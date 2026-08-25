function isValidTreangle(a, b, c) {
  let isValid = a + b > c && a + c > b && b + c > a;

  if (!isValid) {
    return "unvalid triangle";
  }

  if (a === b && b === c) {
    return "equilateral triangle";
  } else if (a === b || b === c || c === a) {
    return "isocelene triangle";
  } else {
    return "scanlene triangle";
  }
}
a = Number(prompt("enter a"));
b = Number(prompt("enter b"));
c = Number(prompt("enter c"));
console.log(a + b > c);
console.log(a + c > b);
console.log(b + c > a);
let resultElement = document.querySelector(".triangle");
if (resultElement) {
  resultElement.innerHTML = isValidTreangle(a, b, c);
}
