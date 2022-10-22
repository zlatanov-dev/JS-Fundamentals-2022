function passwordValidator(password) {
  let check = false;
  let digitCounter = 0;
  let isDigit = false;
  let isLetter = false;
  if (password.length <= 10 && password.length >= 6) {
    check = true;
  } else {
    console.log("Password must be between 6 and 10 characters");
  }

  for (let i = 0; i < password.length; i++) {
    let checker = password[i].charCodeAt();
    if (checker >= 48 && checker <= 57) {
      isDigit = true;
      digitCounter++;
    }
  }

  for (let i = 0; i < password.length; i++) {
    let checker = password[i].charCodeAt();
    if (
      (checker >= 48 && checker <= 57) ||
      (checker >= 65 && checker <= 90) ||
      (checker >= 97 && checker <= 122)
    ) {
      isLetter = true;
    } else {
      isLetter = false;
      break;
    }
  }
  if (isLetter) {
    check = true;
  } else {
    console.log("Password must consist only of letters and digits");
  }
  if (digitCounter < 2) {
    check = false;
    console.log("Password must have at least 2 digits");
  } else {
    check = true;
  }

  if (check) {
    console.log("Password is valid");
  }
}
passwordValidator("l@ogIn");
