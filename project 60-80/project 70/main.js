let number = Number(prompt("enter a number:"));
let temp = number;
let sum = 0;
while (temp > 0) {
  let lastDigit = temp % 10;
  sum += lastDigit;
  temp = Math.floor(temp / 10);
}
console.log(sum);
if (number % sum === 0) {
  console.log(`${number} is harshad number`);
} else {
  console.log(`${number} is  not a harshad number`);
}
