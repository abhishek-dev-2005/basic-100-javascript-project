let number = Number(prompt("give you number"));
if (number <= 100 && number > 90) {
  console.log(`you number is ${number} and grade is 'A' . you are pass`);
} else if (number <= 90 && number > 80) {
  console.log(`you number is ${number} and grade is 'B' . you are pass`);
} else if (number <= 80 && number > 70) {
  console.log(`you number is ${number} and grade is'C'. you are pass `);
} else if (number <= 70 && number > 60) {
  console.log(`you number is ${number} and grade is 'D' . you are pass`);
} else if (number <= 60 && number > 40) {
  console.log(`you number is ${number} and grade is 'p' . you are pass`);
} else {
  console.log(`you number is ${number} and grade is 'f' . you are fail`);
}
