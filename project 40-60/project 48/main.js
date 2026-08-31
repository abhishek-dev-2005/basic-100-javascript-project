let result = 1;
let number = Number(prompt("enter a number:"));
if (number < 0) {
  console.log("negative number ka factorial nahi hota ");
} else {
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
}
console.log(result);
