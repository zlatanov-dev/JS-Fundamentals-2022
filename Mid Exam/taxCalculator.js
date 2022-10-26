function tax(string) {
  let newString = string.replaceAll(">>", " ");
  let arr = newString.split(" ");
  let sum = 0;
  for (let i = 0; i < arr.length; ) {
    let tax = 0;
    let car = arr[i];

    let years = Number(arr[i + 1]);
    let millage = Number(arr[i + 2]);

    if(car == 'family' || car == 'heavyDuty' || car == 'sports'){
    } else {
        console.log('Invalid car type.');
    }

    if (car == "family") {
      tax += 50;
      let taxMillage1 = Math.floor(millage / 3000) * 12;
      tax -= years * 5;
      tax += taxMillage1;
      console.log(`A ${car} car will pay ${tax.toFixed(2)} euros in taxes.`);
      sum += tax;
    } else if (car == "heavyDuty") {
      tax += 80;
      tax -= years * 8;
      let taxMillage2 = Math.floor(millage / 9000) * 14;
      tax += taxMillage2;
      console.log(`A ${car} car will pay ${tax.toFixed(2)} euros in taxes.`);
      sum += tax;
    } else if (car == "sports") {
      tax += 100;
      let taxMillage3 = Math.floor(millage / 2000) * 18;
      tax -= years * 9;
      tax += taxMillage3;
      console.log(`A ${car} car will pay ${tax.toFixed(2)} euros in taxes.`);
      sum += tax;
    }
    i += 3;
  }
  console.log(
    `The National Revenue Agency will collect ${sum.toFixed(2)} euros in taxes.`
  );
}
tax("family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410");

// https://pastebin.com/2YfmbADa
