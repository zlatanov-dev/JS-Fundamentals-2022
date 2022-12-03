function skiTrip(input) {
    let days = Number(input[0]);
    let place = input[1];
    let mark = input[2];
    let price = 0;

    switch (place) {
        case "room for one person":
            price = (days - 1) * 18;
            break;
        case "apartment":
            if (days < 10) {
                price = ((days - 1) * 25) * 0.7;
            } else if (days >= 10 && days <= 15) {
                price = ((days - 1) * 25) * 0.65;
            } else if (days > 15) {
                price = ((days - 1) * 25) * 0.50;
            }
            break;
        case "president apartment":
            if (days < 10) {
                price = ((days - 1) * 35) * 0.9;
            } else if (days >= 10 && days <= 15) {
                price = ((days - 1) * 35) * 0.85;
            } else if (days > 15) {
                price = ((days - 1) * 35) * 0.80;
            }
            break;
    }
    if (mark === "positive") {
        price = price *1.25;
    } else if ( mark === "negative") {
        price = price *0.9;
    } 
console.log(`${price.toFixed(2)}`);
}
skiTrip(["14",
    "apartment",
    "positive"])
    ;