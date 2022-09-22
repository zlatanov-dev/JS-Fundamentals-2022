function solve(input) {
let username = input[0];
let password='';
let counter =0;
for(let i = username.length; i>=0; i--){
    password += username.charAt(i)
}
for(let m =1; m <=(input.length-1); m++){
if(input[m]!= password) {
    counter++;
    if(counter == 4){
        console.log(`User ${username} blocked!`);
        break;
    }
    console.log("Incorrect password. Try again.");
    
    
} else {
    console.log(`User ${username} logged in.`);
}
}
}
solve(['Acer','login','go','let me in','rescA'])