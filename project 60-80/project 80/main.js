let numberA = Number(prompt("enter a number"));
let factorA = [];
let numberB = Number(prompt("enter b number"));
let factorB = [];
for (let i = 1; i <= numberA; i++) {
  if (numberA % i === 0) {
    factorA.push(i);
  }
}
for (let i = 1; i <= numberB; i++) {
  if (numberB % i === 0) {
    factorB.push(i);
  }
}
let commonFactor = factorA.filter((value) => factorB.includes(value));

console.log(` the factor of ${numberA} is -[ ${factorA}]`);
console.log(` the factor of ${numberB} is - [${factorB}]`);
console.log(
  ` the  comman factor  of ${numberA}  and ${numberB} is- [${commonFactor}]`,
);
