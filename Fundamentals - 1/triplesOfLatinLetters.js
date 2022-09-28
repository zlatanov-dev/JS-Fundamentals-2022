function solve(num) {
let letter1 = ''
let letter2 = ''
let letter3 = ''
let sum = ''
for(let i = 0; i<= num-1; i++) {
    letter1 = String.fromCharCode(97 + i);
    for(let k = 0; k<= num-1; k++){
        letter2 = String.fromCharCode(97 + k);
        for(let l = 0; l<= num-1; l++){
            letter3 = String.fromCharCode(97 + l);
            sum = letter1 + letter2 + letter3;
            console.log(sum);

        }
    }
    }
}
solve(3)