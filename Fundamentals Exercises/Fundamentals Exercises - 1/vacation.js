function solve(group, type, day) {
    let price = 0;
    switch (day) {
        case "Friday":
            if (type == "Students") {
                price = 8.45 * group;
                if (group >= 30) {
                    price = price * 0.85;
                }
            } else if (type == "Business") {
                price = 10.9 * group;
                if (group >= 100) {
                    price = 10.9;
                    price = price * (group - 10);
                }
            } else if (type == "Regular") {
                price = 15 * group;
                if (group >= 10 && group <= 20) {
                    price = price * 0.95;
                }
            }
            break;
        case "Saturday":
            if (type == "Students") {
                price = 9.8 * group;
                if (group >= 30) {
                    price = price * 0.85;
                }
            } else if (type == "Business") {
                price = 15.6 * group;
                if (group >= 100) {
                    price = 15.60;
                    price = price * (group - 10);
                }
            } else if (type == "Regular") {
                price = 20 * group;
                if (group >= 10 && group <= 20) {
                    price = price * 0.95;
                }
            }
            break;
        case "Sunday":
            if (type == "Students") {
                price = 10.46 * group;
                if (group >= 30) {
                    price = price * 0.85;
                }
            } else if (type == "Business") {
                price = 16 * group;
                if (group >= 100) {
                    price = 16;
                    price = price * (group - 10);
                }
            } else if (type == "Regular") {
                price = 22.5 * group;
                if (group >= 10 && group <= 20) {
                    price = price * 0.95;
                }
            }
            break;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
solve(100, "Business", "Friday");
