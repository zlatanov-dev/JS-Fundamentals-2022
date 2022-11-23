function toyShop(input) {
    let trip = Number(input[0]);
    let puzzel = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let allpuzzel = puzzel*2.60;
    let alldolls = dolls*3.00;
    let allbears = bears*4.10;
    let allminions = minions*8.20;
    let alltrucks = trucks*2.00;

    let price = allpuzzel+alldolls+allbears+allminions+alltrucks;
    let alltoys =puzzel+dolls+bears+minions+trucks;
    if (alltoys>=50) {
        price=price*0.75;
    } 
    fullprofit=price*0.90;
    moneyleft=fullprofit-trip;
    deficiancy=trip-fullprofit;
    if (fullprofit>=trip) {
        console.log(`Yes! ${moneyleft.toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${deficiancy.toFixed(2)} lv needed.`)
    }
}

toyShop(["500", "20","25","30","50","10"])