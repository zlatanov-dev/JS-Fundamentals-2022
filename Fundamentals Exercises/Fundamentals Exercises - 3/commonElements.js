function solve (arr1, arr2) {
    for( let i = 0; i<arr1.length;i++) {
        for (let g = 0; g < arr2.length; g++){
            if (arr1[i] === arr2[g]){
                console.log( arr1[i]);
            }
        }
    }
}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)