function sumPrimeNonPrime(input) {
    let min = -2147483648;
    let max = 2147483648;
    let index = 0;
    let num = input[index];
    index++;
    let sumPrime = 0;
    let sumNonPrime = 0;
    let number = 0;
    let isPrime=false;
    while (num !== "stop") {
        number = Number(num);
        num = input[index];
        index++;
        if (number < 0) {
            console.log(`Number is negative.`);
            continue;
        }
        if (number%2 === 0 || number%3 === 0 || number%5 === 0){
            if (number===2 ||number===3 ||number===5 ){
                isPrime=true;
                sumPrime += number;
                continue;
            }
            isPrime=false
        } else {
            isPrime = true;
        }
        if(isPrime){
            sumPrime += number;
        } else {
            sumNonPrime += number;
        }

    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}
sumPrimeNonPrime(["30",
"83",
"33",
"-1",
"20",
"stop"])


