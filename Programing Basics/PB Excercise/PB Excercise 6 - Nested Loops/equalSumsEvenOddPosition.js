function equalSumsEvenOddPosition(input) {
    let n = Number(input[0]);
    let n2 = Number(input[1]);
    
    let print = ``;
    for (let i = n; i < n2; i++) {
        let currentNum = "" + i;
        let sumEven = 0;
        let sumOdd = 0;
        for (let z = 0; z < currentNum.length; z++) {
            let currentDigit = Number(currentNum.charAt(z));
            if (z % 2 === 0) {
                sumEven += currentDigit;
            } else {
                sumOdd += currentDigit;
            }
        }
        if (sumEven === sumOdd) {
            print += `${i} `;
        }
    }

    console.log(print);
}
equalSumsEvenOddPosition(["299900",
"300000"])


