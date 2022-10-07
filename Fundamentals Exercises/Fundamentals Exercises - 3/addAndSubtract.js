function solve(arr) {
  let sum = 0;
  let originalSum = 0;

  for (let i = 0; i < arr.length; i++) {
    originalSum += arr[i];
    if (arr[i] % 2 === 0) {
      arr[i] += i;
    } else {
      arr[i] -= i;
    }
    sum += arr[i];
  }
  console.log(`[ ${arr.join(", ")} ]`);
  console.log(originalSum);
  console.log(sum);
}
solve([5, 15, 23, 56, 35]);
