let firstValue = Number(prompt("enter firsr value"));
let secondValue = Number(prompt("enter second value"));
let thirdValue = Number(prompt("enter third value"));
let largest;
largest = Math.max(firstValue, secondValue, thirdValue);

// if (firstValue > secondValue && firstValue > thirdValue) {
//   largest = firstValue;
// } else if (secondValue > firstValue && secondValue > thirdValue) {
//   largest = firstValue;
// } else {
//   largest = thirdValue;
// }
console.log(`the largest number is ${largest}`);
