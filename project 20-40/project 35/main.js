let unit = Number(prompt("Enter a number:"));

if (unit > 0 && unit <= 100) {
  unit = unit * 4;
} else if (unit > 100 && unit <= 200) {
  unit = unit * 6;
} else if (unit > 200 && unit <= 300) {
  unit = unit * 8;
} else if (unit > 300 && unit <= 400) {
  unit = unit * 10;
}
console.log(unit);
