let number = Number(prompt("enter a number:").trim());
let temp = number;
let binary = "";
if (number === 0) {
  binary = "0";
} else {
  while (temp > 0) {
    let remainder = temp % 2;
    binary = remainder + binary;
    temp = Math.floor(temp / 2);
  }
}
console.log(`Decimal: ${number} -> Binary: ${binary}`);
