// let order = Number(prompt("enter a number"));

for (let number = 1; number <= 100; number++) {
  // for (let number = 1; number <= order; number++) {
  let count = 0;

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      count++;
    }
  }
  if (count === 2) {
    console.log(`${number} is a Prime Number`);
  }
}
