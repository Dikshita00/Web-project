// Helper function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function main() {
  const args = process.argv.slice(2);

  if (args.length !== 10) {
    console.error("Please provide exactly 10 numbers as command line arguments.");
    process.exit(1);
  }

  const numbers = args.map(Number);
  if (numbers.some(isNaN)) {
    console.error("All inputs must be valid numbers.");
    process.exit(1);
  }

  const sumEvenNumbers = numbers
    .filter(num => num % 2 === 0)
    .reduce((acc, curr) => acc + curr, 0);

  const sumEvenIndices = numbers
    .filter((_, index) => index % 2 === 0)
    .reduce((acc, curr) => acc + curr, 0);

  const sumPrimeNumbers = numbers
    .filter(num => isPrime(num))
    .reduce((acc, curr) => acc + curr, 0);

  console.log(`Sum of even numbers: ${sumEvenNumbers}`);
  console.log(`Sum of numbers at even indices: ${sumEvenIndices}`);
  console.log(`Sum of prime numbers: ${sumPrimeNumbers}`);
}

main();
