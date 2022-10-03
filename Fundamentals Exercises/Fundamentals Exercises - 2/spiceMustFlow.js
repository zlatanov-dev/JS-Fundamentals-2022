function solve(yield) {
  let sum = 0;
  let yield2 = 0;
  let days = 0;
  let check = ""
  if (yield < 100) {
    console.log();
    check = false
  } else {
    check = true;
  while (yield >= 100) {
    yield2 = yield - 26;
    sum += yield2;
    yield -= 10;
    days += 1;
  }
}
sum -= 26;
  if(check){
  console.log(days);
  console.log(sum);
}
}
solve(25);
