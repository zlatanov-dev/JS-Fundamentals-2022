function maxNumber(input) {
    let index = 0;
    let command = input[index];
    let maxNumber = Number.MIN_SAFE_INTEGER;

    while(command !== "Stop") {
        let num = Number(command);
        if (num > maxNumber){
            maxNumber = num;          
        }
        command = input[index];
        index++;

    
    }
console.log(maxNumber)


}
maxNumber(["5",
"-5",
"-5",
"70",
"Stop"])
