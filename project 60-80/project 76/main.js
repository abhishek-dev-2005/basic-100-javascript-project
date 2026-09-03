let binaryInput = Number(prompt("enter a binary value:"));
let temp = binaryInput;
let decimal = 0;
let power = 0;
while (temp > 0) {
  let lastDigit = temp % 10;
  decimal += lastDigit * Math.pow(2, power);
  power++;
  temp = Math.floor(temp / 10);
}
console.log(decimal);
