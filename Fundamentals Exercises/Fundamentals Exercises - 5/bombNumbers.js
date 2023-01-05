function solve(numbers, bombNumbers) {
    let bomb = bombNumbers[0];
    let power = bombNumbers[1];
for(let i =0; i<numbers.length; i++) {
    if(numbers[i] == bomb) {
        let bombStart = i-power;
        let bombEnd = i+power;
        numbers.splice(bombStart,bombEnd)
    }
}
let sum = 0;
numbers.forEach(element => {
    sum+=element;
});
console.log(sum);
}
solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
    
    
    )