function newHouse(input) {
    let flower = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;

    if (flower === "Roses") {
        price = 5 * quantity;
        if (quantity > 80) {
            price = 5 * 0.9 * quantity;
        }
    } else if (flower === "Dahlias") {
        price = 3.80 * quantity;
        if (quantity > 90) {
            price = 3.80 * 0.85 * quantity;
        }
    } else if (flower === "Tulips") {
        price = 2.80 * quantity;
        if (quantity > 80) {
            price = 2.80 * 0.85 * quantity;
        }
    } else if (flower === "Narcissus") {
        if (quantity < 120) {
            price = 3 * 1.15* quantity;
        } else {
            price = 3 * quantity;
        }
    } else if (flower === "Gladiolus") {
        if (quantity < 80) {
            price = 2.50 * quantity* 1.20 ;
        } else {
            price = 2.50 * quantity;
        }
    }
    let leftover = Math.abs(budget - price);
    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${leftover.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${leftover.toFixed(2)} leva more.`);
    }
}
newHouse(["Roses", "55", "250"]);