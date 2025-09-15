function calculate(...a) {

    let sum = a.reduce((acc, val) => acc + val, 0);
    console.log("Sum:", sum);

 
    let oddNumbers = a.filter(num => num % 2 !== 0);
    console.log("Odd Numbers:", oddNumbers);
}


calculate(1, 2, 3, 4, 5, 6, 7);  
