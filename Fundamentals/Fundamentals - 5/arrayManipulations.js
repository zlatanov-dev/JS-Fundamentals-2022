function arrayManipulations(arr) {
  let numbers = arr[0];
  let arrNumbers = numbers.split(" ");
  let command1 = arr[1];
  let commandAdd = command1.split(" ");
  let command2 = arr[2];
  let commandRemove = command2.split(" ");
  let command3 = arr[3];
  let commandRemoveAt = command3.split(" ");
  let command4 = arr[4];
  let commandInsert = command4.split(" ");

//   switch (command) {
//     case "Add":
//         break;
//     case "Remove" :
//         break;
//     case "RemoveAt" :
//         break;
//     case "Insert" :
//         break;
//   }
  arrNumbers.push(commandAdd[1]);
  let numToRemove = commandRemove[1];
  for (const el of arrNumbers) {
    let indexNum = arrNumbers.findIndex((x) => x == numToRemove);
    arrNumbers.splice(indexNum, 1);
    if (arrNumbers.findIndex((x) => x == numToRemove) == -1) {
      break;
    }
  }
  arrNumbers.splice(commandRemoveAt[1], 1);
  let arrSliced = arrNumbers.slice(0, commandInsert[2]);
  let arrSliced2 = arrNumbers.slice(commandInsert[2]);
  arrSliced.push(commandInsert[1]);
  let arrResult = arrSliced.concat(arrSliced2);
  console.log(arrResult.join(" "));
}
arrayManipulations([
  "6 12 2 65 6 42",
  "Add 8",
  "Remove 12",
  "RemoveAt 3",
  "Insert 6 2",
]);
