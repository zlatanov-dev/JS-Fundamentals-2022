function smallest(arr) {
  let sortedNumbers = arr.sort((a, b) => {
    return a - b;
  });
  let minNumbers = sortedNumbers.slice(0, 2);
  console.log(minNumbers.join(' '));
}
smallest([30, 15, 50, 5]);
