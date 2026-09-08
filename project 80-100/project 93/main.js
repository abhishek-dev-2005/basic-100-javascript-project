let number = [];
let duplicates = [];
for (let i = 1; i <= 5; i++) {
  let userInput = Number(prompt(`Enter number ${i} of 5:`));
  number.push(userInput);
}
let originalArray = [...number];
for (let i = 0; i < number.length; i++) {
  let index = Math.abs(number[i] - 1);
  if (number[index] < 0) {
    duplicates.push(Math.abs(number[i]));
  } else {
    number[index] = -number[index];
  }
}
console.log(`the given array is [${originalArray}]`);

console.log(` yes founded !  
your duplicated array is  [${originalArray}]`);
