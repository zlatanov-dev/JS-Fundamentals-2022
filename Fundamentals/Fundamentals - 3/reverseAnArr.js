function solve(num, arr) {
    let sum='';
    for(let i = num -1; i >= 0; i--){
        sum += arr[i]+ ' '
    }
    console.log(sum);
}
solve(3, [10, 20, 30, 40, 50])