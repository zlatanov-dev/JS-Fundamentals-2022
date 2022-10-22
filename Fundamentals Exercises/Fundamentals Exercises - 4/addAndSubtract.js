function solve(a, b, c) {
    let sum = (a, b) => a+b
    let result = sum(a, b);
    let subtract = (result, c) => result-c;
    console.log(subtract(result, c));
}
solve(23, 6, 10)