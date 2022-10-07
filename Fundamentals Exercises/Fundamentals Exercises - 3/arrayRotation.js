function solve(arr, numberRotations) {
 for (let i = 0; i < numberRotations; i++) {
        let first =arr.shift();
        arr.push(first);
    
 }
console.log(arr.join(" "));


}
solve([51, 47, 32, 61, 21], 2)