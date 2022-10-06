function solve(arr) {
    let sumEven = 0;
    let sumOdd = 0;
    for(let number   of arr) {
        number = Number(number);
        if(number%2 === 0){
            sumEven += number;
        } else {
            sumOdd += number;
        }
    }
    console.log(sumEven - sumOdd);
    
}
solve(['1','2','3','4','5','6'])