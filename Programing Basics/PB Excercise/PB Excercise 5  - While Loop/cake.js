function cake(input) {
    let cakeWidth = Number(input.shift());
    let cakeLength = Number(input.shift());
    let pieces = cakeLength*cakeWidth;
    let command = input.shift();
    let eaten = 0;
    let left = 0;
    while(command !== "STOP") {
        if (eaten >= pieces){
            break;
        }
    let comm = Number(command);
    eaten+=comm;
    command = input.shift();
    }
   left = pieces - eaten;
   if(command === "STOP") {
    console.log(`${left} pieces are left.`);
   }
   if (eaten >= pieces) {
    console.log(`No more cake left! You need ${eaten-pieces} pieces more.`);
   }
}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"STOP"])

