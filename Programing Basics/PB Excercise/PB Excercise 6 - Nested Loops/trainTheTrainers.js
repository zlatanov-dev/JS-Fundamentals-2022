function trainTheTrainers(input) {
    let index = 0;
    let jury = Number(input[index]);
    index += 2;
    let index2 = 1;
    let presentation = input[index2];
    index2 += jury + 1;
    let command = input[index];
    index++;
    let counter= 0;
    let sumAv = 0;
    while (presentation !== "Finish") {
        
        let sumGrade = 0;
        for (let i = 0; i < jury; i++) {
            let grade = Number(command);
            sumGrade += grade;
           
            command = input[index];
            index++;
            if (i + 1 === jury) {
                console.log(`${presentation} - ${(sumGrade / jury).toFixed(2)}.`);
                counter++;
                sumAv +=sumGrade;
            }

        }
        presentation = input[index2];
        index2 += jury + 1;
        command = input[index];
        index++;


    }
if (presentation==="Finish"){
    console.log(`Student's final assessment is ${(sumAv/(jury*counter)).toFixed(2)}.`);
}
}
trainTheTrainers(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"])

