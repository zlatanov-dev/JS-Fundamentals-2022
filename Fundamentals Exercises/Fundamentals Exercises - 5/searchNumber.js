function solve(numbers, actionNumbers) {
let elementsTaken = actionNumbers[0];
let numberDelete = actionNumbers[1];
let numberSearch = actionNumbers[2];
let resultArr = [];

for(let i=0; i<elementsTaken; i++) {
    let elementAdd = numbers[i];
    resultArr.push(elementAdd);
}
for(let i = 0; i<numberDelete; i++){
    resultArr.shift();
}
let counter = 0;
resultArr.forEach(element => {
    if(element == numberSearch){
        counter++;
    }
});
console.log(`Number ${numberSearch} occurs ${counter} times.`);
}
solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )