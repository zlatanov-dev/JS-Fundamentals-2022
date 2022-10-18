function solve(arr) {
  let counter = 1;
  let index = 0;
  let tempCount = 1;
  let tempIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let g = i + 1; g < arr.length; g++) {
      if (arr[g] !== arr[i]) {
        if (tempCount == counter) {
          tempIndex = index;
          tempCount= 1;
          break;
        }
        if (tempCount > counter) {
          counter = tempCount;
          tempCount = 1;
          index = tempIndex;
          tempIndex = 0;
          break;
        }
        break;
      }
      tempCount += 1;
      tempIndex = g;
    }
    if (i + 1 >= arr.length && tempCount > counter) {
      counter = tempCount;
    }
  }
  let result = String(arr[index]) + " ";
  console.log(`${result.repeat(counter)}`);
}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
