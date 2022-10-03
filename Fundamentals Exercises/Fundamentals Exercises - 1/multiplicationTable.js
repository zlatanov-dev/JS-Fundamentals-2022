function solve(a) {
let result=0;
    for(let m = 1; m<=10; m++){
        result = a*m;
        console.log(`${a} X ${m} = ${result}`);
    }
}
solve(5)