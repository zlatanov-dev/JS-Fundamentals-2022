function solve(n) {
    for (let i = 1; i<=n; i++){
        let string = String(i);
        let sum=0;
        let check = '';
    for(let g = 0; g<=string.length; g++) {
        sum += Number(string.charAt(g));
    }
    if(sum === 5 || sum === 7 || sum === 11) {
        check = "True";
    } else {
        check = "False";
    }
    console.log(`${i} -> ${check}`);
}
}
solve(15)