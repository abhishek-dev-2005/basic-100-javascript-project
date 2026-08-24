let arr = [];
let value;
for (i = 0; i < 5; i++) {
  value = Number(prompt("enter five number"));
  arr.push(value);
}
arr.forEach((value) => {
  if (value % 5 === 0) {
    console.log(`${value} is devisible by 5`);
  } else {
    console.log(`${value} is  not devisible by 5`);
  }

  if (value % 11 === 0) {
    console.log(`${value} is devisible by 11`);
  } else {
    console.log(`${value} is  not devisible by 11`);
  }
});
