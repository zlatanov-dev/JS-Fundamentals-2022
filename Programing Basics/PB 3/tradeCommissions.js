function tradeCommissions(input) {
    let town = input[0];
    let sales = Number(input[1]);
    let percentage = 1;
   
    if (town === "Sofia" && sales>=0){
        if (sales>=0 && sales <=500) {
            percentage = 0.05;
        } else if (sales >= 500 && sales <= 1000) {
            percentage = 0.07;
        } else if ( sales >= 1000 && sales <= 10000) {
            percentage = 0.08; 
        } else if ( sales >= 10000) {
            percentage = 0.12;
        }
        } else if (town === "Varna" && sales>=0){
        if (sales>=0 && sales <=500) {
            percentage = 0.045;
        } else if (sales >= 500 && sales <= 1000) {
            percentage = 0.075;
        } else if ( sales >= 1000 && sales <= 10000) {
            percentage = 0.10; 
        } else if ( sales >= 10000) {
            percentage = 0.13;
        } 
    } else if (town === "Plovdiv" && sales>=0){
        if (sales>=0 && sales <=500) {
            percentage = 0.055;
        } else if (sales >= 500 && sales <= 1000) {
            percentage = 0.08;
        } else if ( sales >= 1000 && sales <= 10000) {
            percentage = 0.12; 
        } else if ( sales >= 10000) {
            percentage = 0.145;
        } 
    } else {
        console.log("error");
    }

    let salary = percentage*sales;

    if ((town === "Varna" || town === "Plovdiv"|| town === "Sofia") && sales>=0) {
        console.log(salary.toFixed(2));
    } else{ 
    
    }

}
tradeCommissions(["l", "-10"])
