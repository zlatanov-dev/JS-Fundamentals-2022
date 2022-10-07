function solve(arr) {
  let condensed = [];
  if (arr.length > 1) {
    for (let i = 0; i < arr.length; i++) {
      if (i < arr.length - 1) {
        let sum = arr[i] + arr[i + 1];

        condensed.push(sum);
      }
    }
    let tempArr = [];
    while (condensed.length > 1) {
      for (let i = 0; i < condensed.length; i++) {
        if (i < condensed.length - 1) {
          let sum = condensed[i] + condensed[i + 1];
          tempArr.push(sum);
        }
      }
      condensed = tempArr;
      tempArr = [];
    }
  }
  if (arr.length > 1) {
    console.log(condensed.join());
  } else if (arr.length == 1) {
    console.log(arr.join());
  } else {
    console.log(`${arr[0]} is already condensed to number`);
  }
}
solve([5, 0, 4, 1, 2]);
