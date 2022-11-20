function bonusScore(input) {
    let a = Number(input[0]);
    let bonus=0

    if( a<100 ) {
        bonus =5
    } else if (a<1000) {
        bonus = a*0.20;
    } else if (a>1000) {
        bonus = a*0.10;
    }
    if (a % 2 === 0) {
        bonus+= 1;
    } else if (a % 10 === 5) {
        bonus += 2
    }
    console.log(bonus);
    console.log(a + bonus);
}
bonusScore(["1001"]);