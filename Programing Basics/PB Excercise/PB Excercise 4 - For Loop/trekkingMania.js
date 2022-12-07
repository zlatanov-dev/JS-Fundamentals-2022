function trekkingMania(input) {
    let groups = Number(input[0]);
    let Musala = 0;
    let Monblanc = 0;
    let Kilimandjaro = 0;
    let K2 = 0;
    let Everest = 0;
    let allpeople = 0;

    for (let index = 1; index < input.length; index++) {
        
        let people = Number(input[index]);
       
        if (people <= 5) {
            Musala = (Musala + people);
        } else if (people <= 12) {
            Monblanc = Monblanc + people;
        } else if (people <= 25) {
            Kilimandjaro = Kilimandjaro + people;
        } else if (people <= 40) {
            K2 = K2 + people;
        } else if (people >= 41) {
            Everest = Everest + people;
        }
        allpeople += people;
    }
    Musala=Musala/allpeople*100;
    Monblanc=Monblanc/allpeople*100;
    Kilimandjaro = Kilimandjaro/allpeople*100;
    K2=K2/allpeople*100;
    Everest=Everest/allpeople*100;

    console.log(`${Musala.toFixed(2)}%`);
    console.log(`${Monblanc.toFixed(2)}%`);
    console.log(`${Kilimandjaro.toFixed(2)}%`);
    console.log(`${K2.toFixed(2)}%`);
    console.log(`${Everest.toFixed(2)}%`);
}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"]);