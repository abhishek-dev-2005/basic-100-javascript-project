let number = Number(prompt("enter a number:"));
number = Math.abs(number);
let largest = 0;
let smallest = 9;
while (number > 0) {
  let lastDigit = number % 10;
  if (lastDigit > largest) {
    largest = lastDigit;
  }
  if (lastDigit < smallest) {
    smallest = lastDigit;
  }

  number = Math.floor(number / 10);
}

console.log("the largest digit is :", largest);
console.log("the samllest digit is :", smallest);
