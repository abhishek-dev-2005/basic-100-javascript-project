let j = Number(prompt("enter a number:"));
let sum = 0;
let evenNumber = [];
let oddNumber = [];
for (i = 1; i <= j; i++) {
  sum += i;
  if (i % 2 === 0) {
    evenNumber.push(i);
  } else {
    oddNumber.push(i);
  }
}
console.log(`sum of 1 to ${j} = ${sum}`);
console.log("even number is =", evenNumber);
console.log("odd number is =", oddNumber);
