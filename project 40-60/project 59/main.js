let n = Number(prompt("enter a numbere:"));
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i * i;
}
console.log(`First ${n} natural numbers ke squares ka sum:`, sum);
