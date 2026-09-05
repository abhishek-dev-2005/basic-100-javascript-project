let numStr = prompt("Enter a number:").trim();

// Set sirf unique characters ko store karta hai
let uniqueDigits = new Set(numStr);

if (uniqueDigits.size !== numStr.length) {
  console.log("Repeated digits found!");
} else {
  console.log("All digits are unique!");
}
