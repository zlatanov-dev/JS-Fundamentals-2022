function solve(num) {
let numString = String(num);
let sum=0;
for (let i = 0; i<=numString.length -1 ; i++) {
let num1 = Number(numString[i]);
sum+=num1;
}
console.log(sum);
}
solve(245678)