function solve(m) {
    if (m%400 == 0) {
        console.log("yes");
    } else if(m%4== 0) {
        if(m%100==0){
            console.log("no");
         } else {
             console.log("yes");
         }
    } else {
        console.log("no");
    }
}
solve(2000)