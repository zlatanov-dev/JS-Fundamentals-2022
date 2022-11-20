function godzillaVsKong(input){
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let clothes = Number(input[2]);
    
    let decor = budget*0.10;
    if (statists>150) {
        clothes=clothes*0.90;
    }
    let allclothes = statists*clothes;
    let allexpenses = decor+allclothes;
    let minus = Math.abs(budget - allexpenses);
    if (allexpenses > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${minus.toFixed(2)} leva more.`);
    } else if (allexpenses <= budget) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${minus.toFixed(2)} leva left.`); 
    }
}
godzillaVsKong(["20000","120","55.5"]);