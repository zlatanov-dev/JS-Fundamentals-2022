function library(arr) {
  let shelfTemp = arr.shift();
  let shelf = shelfTemp.replaceAll(" ", ".").replaceAll("&", " ");
  let arrShelfTemp = shelf.split(" ");
  let arrShelf = [];
  for (let i = 0; i < arrShelfTemp.length; i++) {
    let replacedChar = arrShelfTemp[i].replaceAll(".", " ");
    arrShelf.push(replacedChar);
  }
  for (let g = 0; g < arr.length; g++) {
    let command1 = arr[g];
    let tempCommand = command1.replaceAll(" ", ".").replaceAll(".|.", " ");
    let arrCommandTemp = tempCommand.split(" ");
    let arrCommand = [];

    for (let i = 0; i < arrCommandTemp.length; i++) {
      let replacedChar = arrCommandTemp[i].replaceAll(".", " ");
      arrCommand.push(replacedChar);
    }
    let command = arrCommand[0];
    switch (command) {
      case "Add Book":
        let check = true;
        for (let i = 0; i < arrShelf.length; i++) {
          if (arrShelf[i] == arrCommand[1]) {
            check = false;
          }
        }
        if (check) {
          arrShelf.unshift(arrCommand[1]);
        }
        break;
      case "Take Book":
        let check2 = true;
        for (let i = 0; i < arrShelf.length; i++) {
          if (arrShelf[i] == arrCommand[1]) {
            check2 = false;
          }
        }
        if (!check2) {
          let indexTemp = (x) => x == arrCommand[1];
          let indexToRemove = arrShelf.findIndex(indexTemp);
          arrShelf.splice(indexToRemove, 1);
        }

        break;
      case "Swap Books":
        for (let i = 0; i < arrShelf.length; i++) {
          var check3 = false;
          if (arrShelf[i] == arrCommand[1]) {
            check3 = true;
            for (let g = 0; g < arrShelf.length; g++) {
              if (arrShelf[g] == arrCommand[2]) {
                check3 = true;
                break;
              } else {
                check3 = false;
              }
            }
          } else {
            check3 = false;
          }
          if (check3) {
            break;
          }
        }
        if (check3) {
          let indexTemp1 = (x) => x == arrCommand[1];
          let indexToRemove1 = arrShelf.findIndex(indexTemp1);
          let indexTemp2 = (y) => y == arrCommand[2];
          let indexToRemove2 = arrShelf.findIndex(indexTemp2);
          let tempBook = arrShelf[indexToRemove1];
          arrShelf.splice(indexToRemove1, 1, arrShelf[indexToRemove2]);
          arrShelf.splice(indexToRemove2, 1, tempBook);
        }
        break;
      case "Insert Book":
        for (let i = 0; i < arrShelf.length; i++) {
          if (arrShelf[i] == arrCommand[1]) {
          } else {
            arrShelf.push(arrCommand[1]);
          }
        }
        break;
      case "Check Book":
        for (let i = 0; i < arrShelf.length; i++) {
          if (arrCommand[1] < arrShelf.length && arrCommand[1] >= 0) {
            console.log(arrShelf[arrCommand[1]]);
          }
        }
      case "Done":
        break;
    }
  }
  console.log(arrShelf.join(","));
}
library([
  "Anna Karenina&Heart of Darkness&Catch-22&The Stranger&David Copperfield",
  "Add Book | Catch-22",
  "Swap Books | Anna Karenina | Catch-22",
  "Take Book | David Copperfield",
  "Done",
]);

//https://pastebin.com/pPRSs3YE