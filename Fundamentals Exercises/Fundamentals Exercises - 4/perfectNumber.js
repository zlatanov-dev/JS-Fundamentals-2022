function perfectNumber(number) {
let check = false; 
    for(let p = 0; p< 10000; p++ ){
    result = Math.pow(2, p-1)*(Math.pow(2, p) - 1)
    if(result === number) {
        check = true;
        break;
    } else {
        check = false;
    }
}
if(check) {
    console.log('We have a perfect number!');
} else {
    console.log('It\'s not so perfect.');
}
}
perfectNumber(6)