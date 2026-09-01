let n = Number(prompt("Enter the number of terms (n):"));

let first = 0;
let second = 1;

console.log(`First ${n} terms of Fibonacci series:`);

for (let i = 1; i <= n; i++) {
  console.log(first);

  let nextTerm = first + second;
  first = second;
  second = nextTerm;
}

// ??????? i copy from chatgpt
