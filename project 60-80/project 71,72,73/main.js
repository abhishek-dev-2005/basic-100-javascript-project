let a = Number(prompt("Enter first number:").trim());
let b = Number(prompt("Enter second number:").trim());

let tempA = a;
let tempB = b;

// Loop jab tak second number 0 na ho jaye
while (tempB > 0) {
  let remainder = tempA % tempB;
  tempA = tempB;
  tempB = remainder;
}

let gcd = tempA;

console.log(`GCD/HCF of ${a} and ${b} is: ${gcd}`);

// Direct Formula for LCM: (a * b) / GCD
let lcm = (a * b) / gcd;
console.log(`LCM of ${a} and ${b} is: ${lcm}`);
