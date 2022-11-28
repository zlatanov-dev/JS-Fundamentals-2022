function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let studioprice = 0;
    let apartmentprice = 0;
    switch (month) {
        case "May":
        case "October":
            studioprice = nights * 50;
            apartmentprice = nights * 65;
            break;
        case "June":
        case "September":
            studioprice = nights * 75.20;
            apartmentprice = nights * 68.70;
            break;
        case "July":
        case "August":
            studioprice = nights * 76;
            apartmentprice = nights * 77;
            break;
    }
    if (nights > 7 && nights <= 14 && month === "May" || month === "October") {
        studioprice = studioprice * 0.95;
    } else if (nights > 14 && month === "May" || month === "October") {
        studioprice = studioprice * 0.70;
    } else if (nights > 14 && month === "June" || month === "September") {
        studioprice = studioprice * 0.80;
    }
    if (nights > 14) {
        apartmentprice = apartmentprice * 0.90;
    }
    console.log(`Apartment: ${apartmentprice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioprice.toFixed(2)} lv.`);
}
hotelRoom(["May", "15"]);
