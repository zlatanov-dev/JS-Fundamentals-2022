function solve(arr1, arr2) {
    let index;
    let check ='';
    let sum = 0;
    for ( let i = 0; i < arr1.length; i++) {
        let number = Number(arr1[i])
        sum +=number;
        if( arr2[i] === arr1[i]) {
            check = true
        } else {
            check = false
            index = i;
            break;

        }
    }
    if( check) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }
}
solve(['10','21','30'], ['10','20','30'])