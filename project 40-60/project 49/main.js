//  ********************method --------1 ********************

// let number = prompt("enter a number :");
// let digit = number.length;
// console.log(digit);

//  ********************method --------2 ********************
let count = 0;
let number = Number(prompt("enter a number:"));
if (number === 0) {
  count = 1;
} else {
  number = Math.abs(number);
  for (; number > 0; number = Math.floor(number / 10)) {
    count++;
  }
}
console.log(count);
