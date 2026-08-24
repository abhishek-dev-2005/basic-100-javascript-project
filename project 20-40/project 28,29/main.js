let firstNumber = Number(prompt("enter first number"));
let secondNumber = Number(prompt("enter second number"));
let thirdNumber = Number(prompt("enter third number"));
let min = Math.min(firstNumber, secondNumber, thirdNumber);
console.log(firstNumber, secondNumber, thirdNumber);

console.log(min);
if (firstNumber <= 30 && secondNumber <= 30 && thirdNumber <= 30) {
  console.log("number range ke andar hai ");
} else {
  console.log("number range ke andar nahi hai ");
}
