function moving(input) {
    let w = Number(input[0]);
    let l = Number(input[1]);
    let h = Number(input[2]);
    let index = 3;
    let room = l * h * w;
    let command = input[index];
    index++

    while (command !== "Done") {
        let numberBoxes = Number(command);
        room -= numberBoxes;
        if (room < 0) {
            console.log(`No more free space! You need ${Math.abs(room)} Cubic meters more.`);
            break;
        }
        command = input[index];
        index++
    }
    if (command === "Done" && room >= 0) {
        console.log(`${room} Cubic meters left.`);
    }
}
moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"])


