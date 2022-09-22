function solve(age) {
    let gender=0;
    if (0 <= age && age <=2) {
        gender = "baby";
    } else if (3<= age && age <=13) {
        gender = "child";
    }else if (14<= age && age <=19) {
        gender = "teenager";
    } else if (20<= age && age <=65) {
        gender = "adult";
    } else if (66 <= age) {
        gender = "elder";
    } else {
        gender = "out of bounds"
        console.log(gender);
    }
    if (age>= 0) {
        console.log(gender);
    }
}
solve(2)