function solve(day) {
if (day<1 || day>7) {
    console.log("Invalid day!");
} else {
    arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    console.log(arr[day-1]);
}
}
solve(3)