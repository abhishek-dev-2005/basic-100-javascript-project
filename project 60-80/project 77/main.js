let number = Number(prompt("enter a number:").trim());
let temp = number;
let octal = "";
if (number === 0) {
  octal = "0";
} else {
  while (temp > 0) {
    let remainder = temp % 8;
    octal = remainder + octal;
    temp = Math.floor(temp / 8);
  }
}
console.log(`Decimal: ${number} -> Binary: ${octal}`);
