function oscars(input) {
    let index = 0;
    let name = input[index];
    index++;
    let academyPoints = Number(input[index]);
    index++;
    let judges = Number(input[index]);
    index++;
    
    for (let index = 3; index < input.length; index++) {
        if (index % 2 !== 0) {
            let points = index + 1;
            let total = input[index].length * Number(input[points]) / 2;
            academyPoints += total;
        }
        if (academyPoints > 1250.50) {
            break;
        }
    }
    if(academyPoints>1250.5){
        console.log(`Congratulations, ${name} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${name} you need ${(1250.5-academyPoints).toFixed(1)} more!`)
    }
    
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])