function journey(input){
    let budget = Number(input[0]);
    let season = input[1];
    let place = 0;
    let stay = 0;
    let total = 0;
    if (budget <= 100) {
        if (season === "summer"){
            place = "Bulgaria";
            stay = "Camp";
            total = budget*0.30;
        } else if ( season === "winter"){
            place = "Bulgaria";
            stay = "Hotel";
            total = budget*0.70;
    } 
    } else if (budget <= 1000) {
        if (season === "summer"){
            place = "Balkans";
            stay = "Camp";
            total = budget*0.40;
        } else if ( season === "winter"){
            place = "Balkans";
            stay = "Hotel";
            total = budget*0.80;
        } 
    } else if (budget > 1000){
            
            place = "Europe";
            stay = "Hotel" ;
            total = budget*0.90;
        }
    console.log(`Somewhere in ${place}`);
    console.log(`${stay} - ${total.toFixed(2)}`);
}

journey(["50", "summer"]);