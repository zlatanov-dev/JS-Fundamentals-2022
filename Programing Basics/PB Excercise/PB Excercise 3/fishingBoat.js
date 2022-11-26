function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);
    let boat = 0;


    switch (season) {
        case "Spring": boat = 3000; break;
        case "Summer":
        case "Autumn": boat = 4200; break;
        case "Winter": boat = 2600; break;
    }

    if (fishermen <= 6) {
        boat = boat * 0.90;
    } else if (fishermen <= 11) {
        boat = boat * 0.85;
    } else if (fishermen >= 12) {
        boat = boat * 0.75;
    }

    if (fishermen % 2 === 0 && season !== "Autumn") {
        boat = boat *0.95;
    }

    let result = Math.abs(budget - boat);

    if (budget >= boat) {
        console.log(`Yes! You have ${result.toFixed(2)} leva left.`);
    } else if (budget < boat) {
        console.log(`Not enough money! You need ${result.toFixed(2)} leva.`);
    }
}

fishingBoat(["3600", "Autumn", "6"]);