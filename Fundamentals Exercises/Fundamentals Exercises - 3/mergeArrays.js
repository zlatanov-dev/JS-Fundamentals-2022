function solve(arr1, arr2) {
  let endArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (i % 2 === 0) {
      let number1 = Number(arr1[i]);
      let number2 = Number(arr2[i]);
      let sumNumbers = number1 + number2;
      endArr.push(sumNumbers);
    } else {
      let sumStrings = arr1[i] + arr2[i];
      endArr.push(sumStrings);
    }
  }
  console.log(endArr.join(" - "));
}
solve(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
