function range(char1, char2) {
let arr = [];
for(let i = 0; i<128; i++) {
    let char = String.fromCharCode(i);
    arr.push(char);
}

const result1 = char1.charCodeAt();
const result2 = char2.charCodeAt();
let arr2 = []
if(result1<result2) {
arr2 = arr.slice(result1 +1, result2);
} else if(result1>result2) {
arr2 = arr.slice(result2 +1, result1);
}
console.log(arr2.join(' '));
}
range('C',
'#'
)