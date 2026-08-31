// (Number Palindrome)

let originalNumber = Number(prompt("Enter a number:"));
let temp = originalNumber; // Original value ko save rakhne ke liye
let reverse = 0;

// Step 1: Number ko reverse karna
while (temp > 0) {
  let lastDigit = temp % 10;
  reverse = reverse * 10 + lastDigit;
  temp = Math.floor(temp / 10);
}

// Step 2: Compare karna ki original aur reverse same hain ya nahi
if (originalNumber === reverse) {
  console.log(`${originalNumber} ek Palindrome number hai!`);
} else {
  console.log(`${originalNumber} Palindrome number NAHI hai.`);
}

//   ****************************
//  ***************Agar string/words ke liye bhi check karna ho:***********
let input = prompt("enter a word ");
let reversedInput = input.split("").reverse().join("");

if (input === reversedInput) {
  console.log("Ye Palindrome hai!");
} else {
  console.log("Ye Palindrome  nahi hai!");
}
