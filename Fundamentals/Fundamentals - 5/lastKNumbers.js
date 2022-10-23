function lastKNumbers(n, k) {
    let seq = [1]; 
    for(let i =1; i<n; i++) {
    let index = Math.max(0, seq.length -k);
    let lastElements = seq.slice(index);
    let sum = 0;
    for (const el of lastElements) {
        sum+=el;
    }
    seq.push(sum)
    }
    console.log(seq.join(' '));
}
lastKNumbers(6, 3)