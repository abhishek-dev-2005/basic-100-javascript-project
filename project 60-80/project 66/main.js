let number = Number(prompt("enter a number:"));
let factor = [];
for (let i = 1; i < number; i++) {
  if (number % i === 0) {
    factor.push(i);
  }
}
let sum = 0;
factor.forEach((val) => {
  sum += val;
});
if (sum === number && number !== 0) {
  console.log(`${number} is a PERFECT Number!`);
} else {
  console.log(`${number} is NOT a Perfect Number.`);
}
