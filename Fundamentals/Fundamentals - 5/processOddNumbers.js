function processOddNumbers(arr) {
  let arrFinal = arr
    .filter((_, i) => i % 2 !== 0)
    .map((x) => x * 2)
    .reverse();
  console.log(arrFinal.join(' '));
}
processOddNumbers([10, 15, 20, 25]);
