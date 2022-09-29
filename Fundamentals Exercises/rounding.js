function solve(n, m) {
    if (m>15) {
        m = 15
    }

    console.log(parseFloat(n.toFixed(m)));
}
solve(10.5,3)