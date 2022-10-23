function negativeOrPositive(arr) {
    let arr2=[];
    for(let i =0; i<arr.length; i++) {
        if(arr[i] < 0 ){
            arr2.unshift(arr[i])
        } else {
            arr2.push(arr[i])
        }
    }
    for(let i =0; i<arr.length; i++) {
    console.log(arr2[i]);
    }
}
negativeOrPositive(['3', '-2', '0', '-1'])