let number = Number(prompt("enter a number:").trim());
let sum = 0;
let temp = number;
temp = Math.abs(number);
while (temp > 0) {
  let lastDigit = temp % 10;
  let fact = 1;
  for (let i = 1; i <= lastDigit; i++) {
    fact *= i;
  }
  sum += fact;
  temp = Math.floor(temp / 10);
}

if (sum === number) {
  console.log(`${number} is a STRONG Number!`);
} else {
  console.log(`${number} is NOT a Strong Number.`);
}
