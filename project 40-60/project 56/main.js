let number = Number(prompt("enter a number"));
number = Math.abs(number);
let product = 0;
while (number > 0) {
  let lastDigit = number % 10;
  product += lastDigit;
  number = Math.floor(number / 10);
}
console.log(product);
