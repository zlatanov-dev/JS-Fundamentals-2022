function loading(number) {
  if (number == 100) {
    console.log(`100% Complete!`);
  } else {
    stringNumber = String(number);
    let numberInString = stringNumber[0];
    numberToRepeat = Number(numberInString);
    let char = "%".repeat(numberToRepeat);

    let dots = ".".repeat(10 - numberToRepeat);
    console.log(`${number}% [${char}${dots}]`);
    console.log("Still loading...");
  }
}
loading(50);
