function solve(numOne, numTwo, numThree) {
  let sign = "";
  if (numOne > 0 && numTwo > 0 && numThree < 0) {
    sign = "Negative";
  } else if (numOne < 0 && numTwo > 0 && numThree < 0) {
    sign = "Positive";
  } else if (numOne < 0 && numTwo < 0 && numThree < 0) {
    sign = "Negative";
  } else if (numOne > 0 && numTwo < 0 && numThree > 0) {
    sign = "Negative";
  } else if (numOne < 0 && numTwo > 0 && numThree > 0) {
    sign = "Negative";
  } else if (numOne > 0 && numTwo > 0 && numThree > 0) {
    sign = "Positive";
  } else if (numOne < 0 && numTwo < 0 && numThree > 0) {
    sign = "Positive";
  } else if (numOne > 0 && numTwo < 0 && numThree < 0) {
    sign = "Positive";
  }

  console.log(sign);
}
solve(5, 12, -15);
