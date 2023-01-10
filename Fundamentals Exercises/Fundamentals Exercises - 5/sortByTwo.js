function sortByTwo(input) {
 let sortedInput = input.sort((a,b) => {
    return a.length - b.length || a.localeCompare(b)
 })
 sortedInput.forEach(element => {
    console.log(element);
 });
}
sortByTwo(['alpha', 'beta', 'gamma'])