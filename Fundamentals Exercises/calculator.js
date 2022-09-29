function solve(number, operator, number2 ) {
let result = 0;
    switch(operator) {
    case '+': result = number + number2; break;
    case '-': result = number - number2; break;
    case '/': result = number / number2; break;
    case '*': result = number * number2; break;
}
console.log(result.toFixed(2));
}
solve(5,
    '/',
   10
    )