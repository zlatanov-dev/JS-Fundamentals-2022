function solve(bandName, albumName, songName) {
let duration = (albumName.length * bandName.length) * songName.length / 2
let result = Math.ceil(duration/2.5);
console.log(`The plate was rotated ${result} times.`);
}
solve('Black Sabbath', 'Paranoid', 'War Pigs')