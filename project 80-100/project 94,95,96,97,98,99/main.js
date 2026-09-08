let numbers = [];
for (let i = 1; i <= 5; i++) {
  let numbersInput = Number(prompt(`enter ${i} number from 5 numbers`));
  numbers.push(numbersInput);
}
let maxNum = Math.max(...numbers);
let minNum = Math.min(...numbers);
let totalSum = 0;
for (let i = 0; i < numbers.length; i++) {
  totalSum += numbers[i];
}
let average = totalSum / 5;
let reversedNumbers = numbers.toReversed();
let remainingNumbers = numbers.filter((num) => num !== maxNum);
let secondMaxNum = Math.max(...remainingNumbers);
console.log("given array:", numbers);
console.log("Sabse bada number:", maxNum);
console.log("Sabse bada number:", minNum);
console.log("Total Sum:", totalSum);
console.log("average:", average);
console.log("Reversed:", reversedNumbers);
console.log("Second Max Number:", secondMaxNum);
