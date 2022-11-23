function worldSwimmingRecord(input) {
    let record = Number(input[0]);
    let smetri = Number(input[1]);
    let tsmetri = Number(input[2]);

    let zabavqne = Math.floor(smetri/15)*12.5;
    let t1 = smetri * tsmetri;
    let t2 = t1 + zabavqne;

    let razlika = t2 - record;
    if (t2 < record) {
        console.log(`Yes, he succeeded! The new world record is ${t2.toFixed(2)} seconds.`)
    
    } else {
        console.log(`No, he failed! He was ${razlika.toFixed(2)} seconds slower.`)
    }
}
worldSwimmingRecord(["55555.67", "3017", "5.03"]);