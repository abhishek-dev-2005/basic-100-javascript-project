let number = Number(prompt("enter a number:"));
console.log(number);

number = Math.abs(number);
let zero = 0;
do {
  let lastDigit = number % 10;
  if (lastDigit === 0) {
    zero++;
  }
  number = Math.floor(number / 10);
} while (number > 0);
console.log(" total zero in given number:", zero);
