function shopping(input){
    let budget = Number(input[0]);
    let videocards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let allvideocards = videocards*250;
    let allprocessors = processors*(allvideocards*0.35);
    let allram = ram*(allvideocards*0.10);
    let sum = allprocessors+allvideocards+allram;

    if (videocards>processors) {
        sum = sum*0.85;
    }
    let result = Math.abs(budget-sum);
    if (budget>=sum) {
        console.log(`You have ${result.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${result.toFixed(2)} leva more!`);
    }

}
shopping(["900", "2", "1", "3"]);