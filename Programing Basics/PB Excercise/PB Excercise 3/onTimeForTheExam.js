function onTimeForTheExam(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);
    let hourOfArrival = Number(input[2]);
    let minutesOfArrival = Number(input[3]);

    if (hour === hourOfArrival) {
        if (minutes > minutesOfArrival && minutes - 30 > minutesOfArrival) {
            console.log("Early");
            console.log(`${minutes - minutesOfArrival}minutes before the start`);
        } else if (minutes < minutesOfArrival) {
            console.log("Late");
            console.log(`${minutesOfArrival - minutes}minutes after  the start`);
        } else if (minutes === minutesOfArrival || minutes > minutesOfArrival && minutes-30 <= minutesOfArrival) {
            console.log("On time");
        }
    } else if (hour > hourOfArrival) {
        console.log("Early");
        console.log(`${60-Math.abs(minutes - minutesOfArrival)} minutes before the start`);
    } else if (hour < hourOfArrival) {
        console.log("Late");
        console.log(`${minutesOfArrival - minutes}minutes after  the start`);
    }
    if (hour > hourOfArrival + 1 && Math.abs(minutes - minutesOfArrival) > 10) {
        console.log(`${hour - hourOfArrival}:${minutes - minutesOfArrival} hours before the start`)
    } else if (hour > hourOfArrival + 1 && Math.abs(minutes - minutesOfArrival) < 10) {
        console.log(`${hour - hourOfArrival}:0${minutes - minutesOfArrival} hours before the start`)
    } else if (hour < hourOfArrival + 1 && Math.abs(minutes - minutesOfArrival) < 10) {
        console.log(`${hourOfArrival - hour}:0${minutes - minutesOfArrival} hours after the start`)
    } else if (hour < hourOfArrival + 1 && Math.abs(minutes - minutesOfArrival) > 10) {
        console.log(`${hourOfArrival - hour}:${Math.abs(minutes - minutesOfArrival)} hours after the start`)
    }

}
onTimeForTheExam(["9",
    "00",
    "8",
    "30"])

