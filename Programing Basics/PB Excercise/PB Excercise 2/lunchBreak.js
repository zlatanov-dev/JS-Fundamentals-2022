function lunchBreak(input){
    let name = input[0];
    let length = Number(input[1]);
    let lunchbreak = Number(input[2]);

    let lunch = lunchbreak/8;
    let chill = lunchbreak/4;
    let sumtime = lunch+chill+length;
    let result = Math.abs(lunchbreak-sumtime);

    if (lunchbreak>=sumtime){
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(result)} minutes free time.`)
    } else {
    console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(result)} more minutes.`);
    }
}   
lunchBreak(["Game of Thrones", "60","96"]);