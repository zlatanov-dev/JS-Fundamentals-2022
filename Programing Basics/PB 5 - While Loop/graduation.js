function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;
    let grade = Number(input[index]);
    index++;
    let klas = 1;
    let sumGrades = 0;
    let badGrade = 0;

    while (klas <= 12) {
        if (grade>=4.00) {
            sumGrades += grade;
        } else {
            badGrade++;
            if (badGrade >= 2){
                console.log(`${name} has been excluded at ${klas-1} grade`);
            break;
            }
        }
        grade = Number(input[index]);
        index++;
        klas++;
    }
        if (badGrade<2 ) {
            sumGrades= sumGrades/12;
        console.log(`${name} graduated. Average grade: ${sumGrades.toFixed(2)}`);
        }
    }

graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"2",
"5",
"3"])


