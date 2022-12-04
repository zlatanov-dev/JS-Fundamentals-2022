function summerOutfit(input) {
    let temp = Number(input[0]);
    let daynight = input[1];
    let Outfit = 0;
    let Shoes = 0;
    if (temp>=10 && temp <=18){
        if (daynight === "Morning") {
            Outfit = "Sweatshirt";
            Shoes = "Sneakers";
        } else if (daynight === "Afternoon") {
            Outfit = "Shirt";
            Shoes = "Moccasins";
         } else if (daynight === "Evening") {
            Outfit = "Shirt";
            Shoes = "Moccasins";
        } 
    } else if (temp<=24 && temp >18){
        if (daynight === "Morning") {
            Outfit = "Shirt";
            Shoes = "Moccasins";
        } else if (daynight === "Afternoon") {
            Outfit = "T-Shirt";
            Shoes = "Sandals";

         } else if (daynight === "Evening") {
            Outfit = "Shirt";
            Shoes = "Moccasins";
        } 
    } else if (temp>=25){
        if (daynight === "Morning") {
            Outfit = "T-Shirt";
            Shoes = "Sandals";
        } else if (daynight === "Afternoon") {
            Outfit = "Swim Suit";
            Shoes = "Barefoot";

         } else if (daynight === "Evening") {
            Outfit = "Shirt";
            Shoes = "Moccasins";
        } 
    }
        console.log(`It's ${temp} degrees, get your ${Outfit} and ${Shoes}.`)
}
summerOutfit(["22", "Morning"])