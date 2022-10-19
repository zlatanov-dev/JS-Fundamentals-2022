function format(grade) {
  let mark = "";
  if (grade < 3.0) {
    mark = "Fail";
  } else if (grade < 3.5) {
    mark = "Poor";
  } else if (grade < 4.5) {
    mark = "Good";
  } else if (grade < 5.5) {
    mark = "Very good";
  } else if (grade >= 5.5) {
    mark = "Excellent";
  }

  if (grade >= 3) {
    console.log(`${mark} (${grade.toFixed(2)})`);
  } else {
    grade = 2;
    console.log(`${mark} (${grade})`);
  }
}
format(2.99);
