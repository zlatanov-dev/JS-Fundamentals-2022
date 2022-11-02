
function traveling(input) {
    let destination = input[0];
    let minBudget = Number(input[1]);
    let savings = 0;
    let index = 1;
    

    while(destination!=="End"){
    index++;
    while(savings< minBudget) {
        savings += Number(input[index]);
        index++;
    }
    console.log(`Going to ${destination}!`);
    destination=input[index];
    index++
    minBudget = Number(input[index]);
    savings = 0;
    }

}
traveling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"])
