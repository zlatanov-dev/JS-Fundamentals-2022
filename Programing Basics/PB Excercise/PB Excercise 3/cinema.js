function cinema(input) {
    let type = input[0];
    let row = Number(input[1]);
    let column = Number(input[2]);
    let total = 0;
    if (type==="Premiere") {
        total = row*column*12;
    } else if (type === "Normal") {
        total = row*column*7.50;
    } else if (type === "Discount"){
        total = row*column*5;
    }
    console.log(total.toFixed(2));
}
cinema(["Premiere", "10","12"]);