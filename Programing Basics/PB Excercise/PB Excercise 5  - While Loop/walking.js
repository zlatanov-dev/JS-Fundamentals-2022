function walking(input) {
    let index = 0;
    let realSteps = 0;
    let overSteps = 0;
    let steps = input[index];

    while (steps != "Going home") {
        if (input[index+1] === "Going home") {
            index+=2;
            steps = Number(input[index]);
            realSteps += steps;
            index -=2;

        }
        steps = Number(input[index]);
        realSteps += steps;
        index++;
        if (realSteps >= 10000) {
            overSteps = realSteps - 10000;
            break;
        }
        steps = input[index];
    }
    let lessSteps = 0;
    if (realSteps < 10000) {
        lessSteps = 10000 - realSteps;
        console.log(`${lessSteps} more steps to reach goal.`);
    } else {
        console.log("Goal reached! Good job!");
        console.log(`${overSteps} steps over the goal!`);
    }
    


}
walking(["1000",
"1500",
"2000",
"6500"])



