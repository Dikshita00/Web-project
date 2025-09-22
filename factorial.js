// Get the number from command line arguments
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Please provide a number as a command line argument.");
  process.exit(1);
}

const num = parseInt(args[0]);

if (isNaN(num) || num < 0) {
  console.log(" Please provide a valid non-negative integer.");
  process.exit(1);
}

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}


console.log(` Factorial of ${num} is: ${factorial(num)}`);
