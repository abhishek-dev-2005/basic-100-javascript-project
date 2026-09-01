let number = Number(prompt("enter a number"));
let factor = [];
for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    factor.push(i);
  }
}
console.log(` factors or ${number} is -[${factor}]`);
let sumOfFactors = 0;
factor.forEach((val) => {
  sumOfFactors += val;
});
console.log("Sum of factors:", sumOfFactors);
