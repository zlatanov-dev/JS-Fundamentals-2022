function factorial (num1, num2) {
    let sum1=1;
    let sum2=1;
for (let i = num1; i>0; i--){
    sum1*=i;
}
for (let i = num2; i>0; i--){
    sum2*=i;
}
console.log((sum1/sum2).toFixed(2));
}
factorial(6, 2)