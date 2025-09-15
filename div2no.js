//Write a function to divide two numbers and assign function to a variable

const divide = function(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;
};

console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // Error: Division by zero
