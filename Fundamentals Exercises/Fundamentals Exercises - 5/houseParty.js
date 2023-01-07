function houseParty(input) {
  let list = [];
  input.forEach((element) => {
    let currentLine = element.split(" ");
    let name = currentLine[0];
    if (currentLine[2] !== "not") {
      if (list.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        list.push(name);
      }
    } else {
      if (!list.includes(name)) {
        console.log(`${name} is not in the list!`);
      } else {
        let index = list.indexOf(name);
        list.splice(index, 1);
      }
    }
  });
  list.forEach((element => {
    console.log(element);
  }))
}
houseParty([
  "Allie is going!",
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
