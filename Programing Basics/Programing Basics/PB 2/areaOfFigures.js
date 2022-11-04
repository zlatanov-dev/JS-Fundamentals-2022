function area(input){
    let a = input[0];
    let b = Number(input[1]);
    let c = Number(input[2]);
    result=0
    
    if (a==="square") {
        result = b*b
    } else if (a==="rectangle") {
        result = b*c
    } else if (a==="circle") {
        result = Math.PI*Math.pow(b,2);
    } else if (a === "triangle") {
        result = b*c/2
    }

    console.log(result.toFixed(3));
}
area(["triangle","4.5", "20"]);