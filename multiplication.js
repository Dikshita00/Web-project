const readline = require('readline');

function multiplyIfPositive(num1, num2) {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
      reject('Both inputs must be valid numbers!');
    } else if (num1 > 0 && num2 > 0) {
      resolve(num1 * num2);
    } else {
      reject('Both numbers must be positive!');
    }
  });
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the first number: ", (input1) => {
  rl.question("Enter the second number: ", (input2) => {
    const num1 = Number(input1);
    const num2 = Number(input2);

    multiplyIfPositive(num1, num2)
      .then(result => {
        console.log(`The multiplication result is: ${result}`);
      })
      .catch(error => {
        console.error(`Error: ${error}`);
      })
      .finally(() => {
        rl.close();
      });
  });
});
