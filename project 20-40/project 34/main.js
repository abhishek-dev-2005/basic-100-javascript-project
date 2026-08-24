const buyCost = Number(prompt("enter you Purchasing cost"));

const sellCost = Number(prompt("enter you selling cost"));

const toalvalue = sellCost - buyCost;
console.log(toalvalue);

if (buyCost < sellCost) {
  console.log(`profit ${toalvalue}`);
} else {
  console.log(`loss ${toalvalue}`);
}
