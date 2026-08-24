let arr = [];
let value;
for (i = 0; i < 5; i++) {
  value = prompt("enter 5 number");
  arr.push(value);
}
arr.forEach((value) => {
  if (Number(value) === 0) {
    console.log(value);
  } else {
    console.log("there is no zero");
  }
});
