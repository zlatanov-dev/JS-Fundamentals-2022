function numbersDivisibleBy9(input) {
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let sum = 0;
    for (i =N1; i<= N2; i++) {
        if (i%9 === 0) {
            sum += i; 
            
        }
    }
    console.log(`The sum: ${sum}`);

    for (i =N1; i<= N2; i++) {
        if (i%9 === 0) {
            console.log(i);  
        }
} 
}
numbersDivisibleBy9(["100", "200"]);