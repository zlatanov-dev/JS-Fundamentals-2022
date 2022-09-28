function solve(n) {
   let numberString = String(n);
   let sumString = 0;
   let check = '';
   for(let i = 0; i<= numberString.length; i++){
    sumString += Number(numberString.charAt(i))
    
   }
   let sumString2 = String(sumString);
   for(let i = 0; i<= sumString2.length; i++){
    if (sumString2.charAt(i) === "9"){
        check = true;
    } 
   }
   console.log(check=== true?
    `${n} Amazing? True`:
    `${n} Amazing? False`)
}
solve(123)