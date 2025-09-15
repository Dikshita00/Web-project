const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr = ["apple", "banana", "cherry"];

console.log("Initial Array:", arr.join(", "));
console.log(`
Choose an array operation:
1. Push (Add at end)
2. Pop (Remove from end)
3. Shift (Remove from start)
4. Unshift (Add at start)
5. Includes (Check if element exists)
6. IndexOf (Find index of element)
7. Reverse array
`);

rl.question("Enter your choice (1–7): ", function(choice) {
  choice = parseInt(choice);

  switch (choice) {
    case 1:
      rl.question("Enter element to push: ", function(element) {
        arr.push(element);
        console.log("After push:", arr);
        rl.close();
      });
      break;

    case 2:
      arr.pop();
      console.log("After pop:", arr);
      rl.close();
      break;

    case 3:
      arr.shift();
      console.log("After shift:", arr);
      rl.close();
      break;

    case 4:
      rl.question("Enter element to unshift: ", function(element) {
        arr.unshift(element);
        console.log("After unshift:", arr);
        rl.close();
      });
      break;

    case 5:
      rl.question("Enter element to check with includes: ", function(element) {
        console.log(`Includes '${element}':`, arr.includes(element));
        rl.close();
      });
      break;

    case 6:
      rl.question("Enter element to find index: ", function(element) {
        console.log(`Index of '${element}':`, arr.indexOf(element));
        rl.close();
      });
      break;

    case 7:
      arr.reverse();
      console.log("After reverse:", arr);
      rl.close();
      break;

    default:
      console.log("Invalid choice. Please select a number between 1 and 7.");
      rl.close();
  }
});
