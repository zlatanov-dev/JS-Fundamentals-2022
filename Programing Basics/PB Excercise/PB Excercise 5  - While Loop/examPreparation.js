function examPreparation(input) {
    let badGrade = Number(input[0]);
    let i = 0;
    let command = input[i];
    i++;
    let index = 1;
    let counter2 = 0;
    let name = input[index];
    index += 2;
    let grade = Number(input[index - 1]);
    let sumGrade = 0;
    let counter = 0;
    while (command !== "Enough") {
        counter2++;
        if (grade <= 4) {
            counter++;
            if (counter >= badGrade) {
                console.log(`You need a break, ${badGrade} poor grades.`);
                break;
            }
        }
        sumGrade += grade;
        name = input[index];
        index += 2;
        grade = Number(input[index - 1]);
        if (name === "Enough" || grade === "Enough") {
            console.log(`Average score: ${(sumGrade/counter2).toFixed(2)}`);
            console.log(`Number of problems: ${counter2}`);
            console.log(`Last problem: ${input[index-4]}`);
            
            break;
        }
    }
   

}
examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])




