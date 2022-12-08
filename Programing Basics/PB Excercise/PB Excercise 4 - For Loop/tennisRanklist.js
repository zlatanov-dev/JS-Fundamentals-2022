function tennisRanklist(input) {
    let index = 0;
    let tournaments = Number(input[index]);
    index++;
    let point = Number(input[index]);
    index++;
    let point1 = 0;
    let win = 0;

for(let i=1; i<= tournaments; i++) {
    let result = input[index];
    index++;
    if (result ==="W" ){
        point1 += 2000;
        win++;
    } else if (result === "F") {
        point1 += 1200; 
        
    } else if (result === "SF") {
        point1 += 720;
    }
}
let total = point+point1;
let average = point1/tournaments;
let totalWins = win/tournaments*100;
console.log(`Final points: ${total}`)
console.log(`Average points: ${Math.floor(average)}`);
console.log(`${totalWins.toFixed(2)}%`);

    
}
tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
