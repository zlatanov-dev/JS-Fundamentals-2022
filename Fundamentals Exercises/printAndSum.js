function solve(m, n) {
   let sumM="";
    let sum = 0;
    while(m<=n){
        sumM+=`${m} `;
        sum+=m
        m++;
    }
    console.log(sumM);
    console.log(`Sum: ${sum}`);
}
solve(5, 10)