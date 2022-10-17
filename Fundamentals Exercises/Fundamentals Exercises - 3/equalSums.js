function solve(input) {
  let check = false;
  let counter = 0;
  for (let i = 0; i < input.length; i++) {
    let tempSum = 0;
    let tempSum2 = 0;

    for (let g = i; g >= 0; g--) {
      if (g - 1 < 0) {
        tempSum += 0;
      } else {
        tempSum += input[g - 1];
      }
    }
    for (let k = i; k < input.length; k++) {
      if (k + 1 >= input.length) {
        tempSum2 += 0;
      } else {
        tempSum2 += input[k + 1];
      }
      if (tempSum < tempSum2) {
        check = false;
        break;
      }
    }
    if (tempSum === tempSum2) {
      check = true;
      break;
    }
    counter++;
  }
  if (check) {
    console.log(counter);
  } else {
    console.log("no");
  }
}
solve([1, 2, 3, 3]);
