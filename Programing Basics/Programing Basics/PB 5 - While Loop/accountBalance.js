function accountBalance(input) {
    let index = 0;
    let deposit = Number(input[index]);
    let sum = 0;

    while (deposit !== "NoMoreMoney") {

        if (deposit >= 0 && deposit !== "NoMoreMoney") {
            deposit = Number(input[index]);
            console.log(`Increase: ${deposit.toFixed(2)}`);
            sum = sum + deposit;
            index++;

        } else if (deposit < 0 && deposit !== "NoMoreMoney") {
            console.log("Invalid operation!");
            console.log(`Total: ${sum.toFixed(2)}`)
            break;
        }
        deposit = String(input[index]);
        if (deposit === "NoMoreMoney") {
            console.log(`Total: ${sum.toFixed(2)}`);
        }
        
    }

}
accountBalance(["120",
    "42.55",
    "-150", ])
