function matrix(num) {
for(let i= 1; i<=num; i++) {
    stringNum = num.toString() + " ";
    console.log(`${stringNum.repeat(num)}`);
}
}
matrix(3)