// let rank = Number(
//   prompt(`enter your rank in company :
// (everyone rank is 1 to 3)`),
// );
// let rating = Number(
//   prompt("enter your srting in work (note:everyone rating is up to 2)"),
// );

// let bonus = Number();
// if (rank < 0 && rank >= 1) {
//   bonus = 35000 * 4500;
// } else if (rank < 1 && rank >= 2) {
//   bonus = 50000 * 5500;
// } else if (rank < 2 && rank >= 3) {
//   bonus = 75000 * 7000;
// }
// console.log(bonus);
let baseSalary = 30000;
let bonus = 5000;
let pfPercent = 12;
let grosssalary = baseSalary + bonus;
let pfDeduction = (baseSalary * pfPercent) / 100;
let totalHnad = grosssalary + pfDeduction;
document.querySelector(".total-amount").innerHTML = "₹" + totalHnad;
