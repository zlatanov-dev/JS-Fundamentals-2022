function sumNumbers(input) {
    let index = 0;
    let number = Number(input[index]);
    index++;
    let add = Number(input[index]);
    index++;
    let sum = 0;
    while (sum < number) {
        sum += add;
        add = Number(input[index]);
        index++;
    }
    console.log(sum);

}
sumNumbers(["100",
    "10",
    "20",
    "30",
    "40"]);
