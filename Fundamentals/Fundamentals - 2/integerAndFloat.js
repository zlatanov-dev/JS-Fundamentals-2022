function solve(a,b,c) {
   let sum = a+b+c;
   if(Number.isInteger(sum)){
    console.log(`${sum} - Integer`);
   } else {
    console.log(`${sum} - Float`);
   }
}
solve(9, 100, 1.1);