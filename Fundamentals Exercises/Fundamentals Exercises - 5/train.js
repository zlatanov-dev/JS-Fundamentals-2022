function solve(arr) {
  let passengersInTrain = arr.shift().split(" ").map(Number);
  let maxCapacity = Number(arr.shift());
  const arrayLength = arr.length;

  for (let i = 0; i < arrayLength; i++) {
    let currentRow = arr[i].split(" ");
    if (currentRow.length > 1) {
      let passengers = Number(currentRow[1]);
      passengersInTrain.push(passengers);
    } else {
      for (let j = 0; j < passengersInTrain.length; j++) {
        let passengersInCurrentWagon = Number(passengersInTrain[j])+Number(currentRow[0]);
        if (passengersInCurrentWagon <= maxCapacity) {
            passengersInTrain[j] += Number(currentRow[0]);
            break;
        }
      }
    }
  }
  let loggedResult = passengersInTrain.join(' ')
  console.log(loggedResult);
}
solve(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
