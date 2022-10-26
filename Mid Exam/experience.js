function solve(arr) {
  // "Player successfully collected his needed experience for {battleCount} battles."
  // "Player was not able to collect the needed experience, {neededExperience} more needed."
  let experienceNeeded = arr.shift();
  let countOfBattles = arr.shift();
  let sum = 0;
  let check = false;
  let battleCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let expGained = 0;
    if (i == 2) {
      expGained = 1.15 * arr[i];
    } else if (i == 4) {
      expGained = 0.9 * arr[i];
    } else if (i == 14) {
      expGained = 1.05 * arr[i];
    } else {
        expGained = arr[i];
    }
    sum += expGained;
    battleCount++;
    if (sum >= experienceNeeded) {
      check = true;
      break;
    }
  }
  if ((check)) {
    console.log(`Player successfully collected his needed experience for ${battleCount} battles.`);
  } else {
    console.log(`Player was not able to collect the needed experience, ${(experienceNeeded - sum).toFixed(2)} more needed.`);
  }
}
//50,100,200,100,20
solve([500, 5, 50, 100, 100, 20]);
