function solve(arr) {
for(let i = 0; i < arr.length; i++) {
    let string1 = String(arr[i])
    let splitString = string1.split('');
    let reverseString = splitString.reverse();
    let joinString = reverseString.join('')
    
    if(string1 === joinString) {
        console.log(true);
    } else {
        console.log(false);
    }
}
}
solve([123,323,421,121])