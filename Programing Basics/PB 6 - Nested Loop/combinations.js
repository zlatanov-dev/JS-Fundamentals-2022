function combinations(input) {
    let n = Number(input[0]);
    let counter = 0;
    for(let x=0;x<=n;x++){
        for(let y=0;y<=n;y++){
            for(let z=0;z<=n;z++){
                let result = x+y+z;
                if( result === n){
                    counter++;
                }


            }
        }
    }
console.log(counter);


}
combinations(["5"])