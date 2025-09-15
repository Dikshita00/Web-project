const arr = [10, 5, 20, 8, 15];

// 1. Using for loop
let max1 = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max1) {
    max1 = arr[i];
  }
}

// 2. Using Math.max with spread operator
const max2 = Math.max(...arr);

// 3. Using reduce method
const max3 = arr.reduce((acc, curr) => (curr > acc ? curr : acc), arr[0]);

console.log("Max using for loop:", max1);
console.log("Max using Math.max and spread:", max2);
console.log("Max using reduce:", max3);
