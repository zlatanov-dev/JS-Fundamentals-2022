function personalTitles(input) {
    let age = Number(input[0]);
    let gender = input[1];
    if (age>=16) {
        if (gender ==="m") {
            console.log("Mr.");
        } else if(gender ==="f") {
            console.log("Ms.");
        }
    } else if (age < 16) {
        if (gender === "m") {
            console.log("Master");
        } else if (gender ==="f") {
            console.log("Miss")
        }
    }
    }

personalTitles(["12", "f"]);