let number = Number(prompt("enter a number:"));
let temp = number;
let square = 0;
let lastDigitSquare = 0;
while (temp > 0) {
  let lastDigit = temp % 10;
  square = lastDigit * lastDigit;
  lastDigitSquare = square % 10;
  temp = Math.floor(temp / 10);
}
if (number === lastDigitSquare) {
  console.log("this is automorphic number");
} else {
  console.log("this is not automorphic number");
}
