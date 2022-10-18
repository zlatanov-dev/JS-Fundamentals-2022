function solve(arr, magicNumber) {
    for(let i = 0; i<arr.length; i++) {
        for(let g = i+1; g<arr.length; g++) {
            let sum = arr[i]+arr[g];
            if(sum == magicNumber) {
                console.log(`${arr[i]} ${arr[g]}`);
            }
        }
    }
}
solve([1, 7, 6, 2, 19, 23],
    8
    )