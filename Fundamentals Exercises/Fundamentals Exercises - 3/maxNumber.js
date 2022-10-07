function solve(arr) {
  let check = false;
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length-1 ) {
      arr2.push(arr[i]);
      break;
    } else {
      for (let g = i + 1; g < arr.length; g++) {
        if (arr[i] > arr[g]) {
          check = true;
        } else {
          check = false;
          break;
        }
      }
    }
    if (check) {
      arr2.push(arr[i]);
    }
  }
  console.log(arr2.join(" "));
}
solve([41,
    41,
    34,
    20]);
