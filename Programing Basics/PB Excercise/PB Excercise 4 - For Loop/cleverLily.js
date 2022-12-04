function cleverLily(input) {
    let age = Number(input[0]);
    let washingMachine = Number(input[1]);
    let toyPrice = Number(input[2]);
   
    let savedMoney = 0;
    let addMoney = 10;
    let stolenMoney = 0;
    let toyMoney = 0;
    let toyCounter = 0;
   
    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            savedMoney = savedMoney + addMoney;
            addMoney = addMoney + 10;
            stolenMoney++;
        } else {
            toyCounter++;
            toyMoney = toyCounter * toyPrice;
        }
    }
    let sum = savedMoney + toyMoney - stolenMoney;
    if (sum >= washingMachine) {
        console.log(`Yes! ${(sum-washingMachine).toFixed(2)}`);
    } else {
        console.log(`No! ${((washingMachine-sum).toFixed(2))}`);
    }
}
cleverLily(["10", "170.00", "6"])