function calculate(...a) {

    let sum = a.reduce((acc, val) => acc + val, 0);
    console.log("Sum:", sum);


    let oddNumbers = a.filter(num => num % 2 !== 0);
    console.log("Odd Numbers:", oddNumbers);

   
    let maxNumber = Math.max(...a); 
    console.log("Maximum Number:", maxNumber);
}


calculate(4, 7, 2, 13, 6, 9); 
