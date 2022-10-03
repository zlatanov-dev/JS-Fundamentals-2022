function solve(n) {
for(let m = 1; m<=n ; m++){
     let row = '';
     for(let j=1; j<=m; j++){
        row+=`${m} `
     }
console.log(row);
}
}
solve(3)