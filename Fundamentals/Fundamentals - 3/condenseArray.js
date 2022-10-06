function solve(arr) {
  let condensed = [];
  if (arr.length > 1) {
  
    for (let i = 0; i < arr.length; i++) {
      if (i < arr.length - 1) {
      let  sum = arr[i] + arr[i + 1];
        
        condensed.push(sum.toString());
      }
    }
    
    let tempArr = [];
    while(condensed.length >1) {
      tempArr = Number(condensed);
      for (let i = 0; i < tempArr.length; i++) {
          let sum = tempArr[i] + tempArr[i + 1];
          tempArr.push(sum.toString());
          condensed = tempArr
      
    }
  }
} else {
    console.log(`${arr[0]} is already condensed to number`);
  }
  console.log(arr);
}

solve([5, 0, 4, 1, 2]);
