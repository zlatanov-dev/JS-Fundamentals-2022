function sorting(input) {
    let sortedArray = input.sort((a,b) => a-b);
    let sortedArrayLength = sortedArray.length/2;
    let resultArr = [];

    for(let i =0; i<sortedArrayLength; i++) {
        let popedNumber = sortedArray.pop();
        let shiftedNumbe = sortedArray.shift();
        resultArr.push(popedNumber);
        resultArr.push(shiftedNumbe);
    }
    
    console.log(resultArr.join(' '));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])