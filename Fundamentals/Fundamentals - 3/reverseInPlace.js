function solve(arr) {
    for (let i = 0; i < arr.length/2; i++){
        arr[i] = arr[arr.length - 1 -i];
        
        console.log(arr);
    }
}
solve(['a', 'b', 'c', 'd', 'e'])