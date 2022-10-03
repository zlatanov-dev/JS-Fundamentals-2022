function solve(parameter){
console.log(typeof(parameter));

if(typeof parameter  === "string" || typeof parameter ==="number") {
    
    console.log(parameter);
} else {
    console.log('Parameter is not suitable for printing');
}
}
solve(true)