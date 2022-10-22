function solve(number) {
  let numberAll = String(number);
  let sumOdd = 0;
  let sumEven = 0;
  for (let i = 0; i < numberAll.length; i++) {
    let numberTemp = Number(numberAll[i]);
    if (numberTemp % 2 == 0) {
      sumEven += numberTemp;
    } else {
      sumOdd += numberTemp;
    }
  }
  console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}
solve(1000435);
