function vacation(input) {
    let index = 0;
    let neededMoney = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;
    let action = input[index];
    index += 2;
    let actionMoney = Number(input[index - 1]);
    let counter = 0;
    let counter2 = 0;

    while (neededMoney > money) {
        if (action === "save") {
            money += actionMoney;
            counter = 0;
        } else {
            money -= actionMoney;
            counter++;

            if (counter >= 5) {
                break;
            }
            if (money < 0) {
                money = 0;
            }
        }
        action = input[index];
        index += 2;
        actionMoney = Number(input[index - 1]);
        counter2++;
        if (neededMoney <= money) {
            break;
        }
    }
    if (counter >= 5) {
        console.log("You can't save the money.");
        console.log(counter);
    } else {
        console.log(`You saved the money for ${counter2} days.`);
    }
}
vacation([
    "110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
]);
