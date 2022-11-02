function sumOfTwoNumbers(input) {
    let begin = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0;
    let flag = false;
    let result = 0;
    for( let x = begin; x<= end; x++) {
        for(let y = begin; y<=end; y++){
            result = x+y;
            counter++
            if(result === magicNumber){
                console.log(`Combination N:${counter} (${x} + ${y} = ${magicNumber})`);
                flag = true;
                break;
            }
        }
        if(flag){
            break;
        }
    }
    if( result!== magicNumber){
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}
sumOfTwoNumbers(["23",
"24",
"20"])
