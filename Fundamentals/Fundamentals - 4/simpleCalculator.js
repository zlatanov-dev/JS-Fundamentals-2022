function solve(number1, number2, operator) {
  let multiply = (number1, number2) => number1 * number2;
  let divide = (number1, number2) => number1 / number2;
  let add = (number1, number2) => number1 + number2;
  let subtract = (number1, number2) => number1 - number2;
    
  let result = 0;
  switch (operator) {
    case 'multiply': result = multiply(number1, number2);
      break;
    case 'divide': result = divide(number1, number2);
      break;
    case 'add': result = add(number1, number2);
      break;
    case 'subtract': result = subtract(number1, number2);
      break;
  }

  console.log(result);
}
solve(5, 5, "multiply");
