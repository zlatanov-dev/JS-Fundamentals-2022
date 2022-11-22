function sumSeconds(input) {
    let a=Number(input[0]);
    let b=Number(input[1]);
    let c=Number(input[2]);
    let totaltime= a+b+c;
    let minutes=Math.floor(totaltime/60);
    let seconds=totaltime%60;
    if (seconds<10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}
sumSeconds(["35", "45", "44"]);