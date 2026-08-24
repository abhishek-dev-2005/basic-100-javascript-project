let a = prompt();
let b = prompt();
let FirstNumber = Math.round(a);
let secondNumber = Math.round(b);
// *********1*******
console.log("1: addition of 2 number");
console.log(FirstNumber + secondNumber);
// *********2*******

if (a > b) {
  console.log("2: subtraction of 2 number");
  console.log(FirstNumber - secondNumber);
}

// *********3*******

console.log("3: multipitication of 2 number");
console.log(FirstNumber * secondNumber);
// *********4*******

console.log("4: division of 2 number");
console.log(FirstNumber / secondNumber);
// *********5*******
console.log("5: remainder of 2 number");
console.log(FirstNumber % secondNumber);
// *********6*******

console.log(`6: square of ${FirstNumber}`);
console.log(FirstNumber * FirstNumber);
// *********7*******

console.log(`7: cube of ${FirstNumber}`);
console.log(FirstNumber * FirstNumber * FirstNumber);
// *********8*******
console.log("8: area of rectangle ");
console.log(`length is ${FirstNumber} and width is ${secondNumber}`);
console.log(FirstNumber * secondNumber);
// *********9*******

console.log("9: perimeter of rectangle");
console.log(`length is ${FirstNumber} and width is ${secondNumber}`);
const perimeter = 2 * FirstNumber + secondNumber;
console.log(perimeter);
// *********10*******
console.log(`10: Radius is ${FirstNumber} area of circle `);
const area = 2 * 3.14 * `${FirstNumber}`;
console.log(area);

// *********11*******
// *********12*******
// *********13*******
// *********14*******
// *********15*******
// *********16*******
// *********17*******
// *********18*******
// *********18*******
// *********20*******
