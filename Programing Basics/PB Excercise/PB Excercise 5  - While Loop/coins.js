function coins(input) {
    let change = Number(input[0]);
    let inCoins = Math.floor(change*100);
    let counter = 0;


    while(inCoins > 0) {
        if (inCoins >=200) {
            inCoins -= 200;
            counter++;
        } else if (inCoins >=100) {
            inCoins -= 100;
            counter++;
        }else if (inCoins >=50) {
            inCoins -= 50;
            counter++;
        }else if (inCoins >=20) {
            inCoins -= 20;
            counter++;
        }else if (inCoins >=10) {
            inCoins -= 10;
            counter++;
        }else if (inCoins >= 5) {
            inCoins -= 5;
            counter++;
        } else if (inCoins >=2) {
            inCoins -= 2;
            counter++;
        }else if (inCoins >=1) {
            inCoins -= 1;
            counter++;
        }
    }
    console.log(counter);



}
coins(["2"]);