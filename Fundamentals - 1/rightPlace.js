function    solve(s, c, s2) {
for (let i = 0; i <= s.length; i++) { 
    if(s.charAt(i)=== "_"){
        if(c===s2.charAt(i)){
            console.log("Matched");
            break;
        } else {
            console.log("Not Matched");
            break;
        }
    }
}
}

solve('Str_ng', 'i', 'String')