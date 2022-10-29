function smallShop(input) {
    let beverage = input[0];
    let city = input[1];
    let quantity = input[2];
    let price = 0;
    switch(city) {
        case "Sofia":
            switch (beverage) {
                case "coffee": price = quantity*0.50; break;
                case "water": price = quantity*0.80; break;
                case "beer": price = quantity*1.20; break;
                case "sweets": price = quantity*1.45; break;
                case "peanuts": price = quantity*1.60; break;
                } break;
        case "Varna":
            switch (beverage) {
                case "coffee": price = quantity*0.45; break;
                case "water": price = quantity*0.70; break;
                case "beer": price = quantity*1.10; break;
                case "sweets": price = quantity*1.35; break;
                case "peanuts": price = quantity*1.55; break;
                } break;
        case "Plovdiv":
                switch (beverage) {
                case "coffee": price = quantity*0.40; break;
                case "water": price = quantity*0.70; break;
                case "beer": price = quantity*1.15; break;
                case "sweets": price = quantity*1.30; break;
                case "peanuts": price = quantity*1.50; break;
                 } break;
    }
    console.log(price);

}
smallShop(["coffee","Plovdiv","2"]);