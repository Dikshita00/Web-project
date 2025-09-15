/* Write a function getFactorialImpl ( choice="FORLOOP" ) ----it could be FORLOOP or RECUR
	Function Fact2(n1)
	Use recursion and print the factorial
	If the choice is FORLOOP return Fact1
	If the choice is RECUR then return Fact2
	Outside --- call let rv = getFactorialImpl("RECUR")
	rv(3)
	Rv = getFactorialImpl()
	rv(5)
*/

function getFactorialImpl(choice = "FORLOOP") {

  function Fact1(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  
  function Fact2(n) {
    if (n <= 1) return 1;
    return n * Fact2(n - 1);
  }

  if (choice === "FORLOOP") {
    return Fact1;
  } else if (choice === "RECUR") {
    return Fact2;
  } else {
    throw new Error("Invalid choice! Use 'FORLOOP' or 'RECUR'.");
  }
}

let rv = getFactorialImpl("RECUR");
console.log(rv(3)); 

rv = getFactorialImpl();
console.log(rv(5));