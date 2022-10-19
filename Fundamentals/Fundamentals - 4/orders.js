function order(beverage, number) {
  let price = 0;
  if (beverage == "coffee") {
    price = 1.5;
  } else if (beverage == "water") {
    price = 1;
  } else if (beverage == "coke") {
    price = 1.4;
  } else if (beverage == "snacks") {
    price = 2;
  }
  let result = price * number;

  console.log(result.toFixed(2));
}
order("water", 5);
