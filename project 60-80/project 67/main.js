let number = Number(prompt("enter a number:").trim());
let temp = number;
let sum = 0;
while (temp > 0) {
  let lastDigit = temp % 10;
  sum += lastDigit * lastDigit * lastDigit;
  temp = Math.floor(temp / 10);
}
if (sum === number) {
  console.log(`${number} is an Armstrong Number!`);
} else {
  console.log(`${number} is not an Armstrong Number!`);
}
