let numStr = prompt("enter a number").trim();

let isAscending = true;
for (let i = 0; i < numStr.length - 1; i++) {
  if (Number(numStr[i]) > Number(numStr[i + 1])) {
    isAscending = false;
    break;
  }
}
if (isAscending) {
  console.log("Ascending order mein hai!");
} else {
  console.log("Ascending order mein NAHI hai.");
}
