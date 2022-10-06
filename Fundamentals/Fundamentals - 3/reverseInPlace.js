function solve(arr) {
    let tempChar = '';
    for (let i = 0; i < arr.length/2; i++){
        tempChar = arr[i]
        arr[i] = arr[arr.length - 1 -i];
        arr[arr.length-1- i] = tempChar
    }
    console.log(arr.join(" "));
}
solve(['a', 'b', 'c', 'd', 'e'])