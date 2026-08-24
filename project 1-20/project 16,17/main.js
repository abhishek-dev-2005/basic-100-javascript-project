let arr = [];
let value;
for (i = 0; i < 5; i++) {
  value = prompt("enter 5 number");
  arr.push(value);
}
console.log(arr);

arr.forEach((value) => {
  if (Number(value) % 2 === 0) {
    console.log(`${value} is even`);
  } else {
    console.log(`${value} is odd`);
  }
});
