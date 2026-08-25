function isValidTreangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return "valid triangle";
  } else {
    return "unvalid triangle";
  }
}
a = Number(prompt("enter a"));
b = Number(prompt("enter b"));
c = Number(prompt("enter c"));
console.log(a + b > c);
console.log(a + c > b);
console.log(b + c > a);

console.log(isValidTreangle(a, b, c));
