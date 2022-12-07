function salary(input) {
    //"Facebook" -> 150 лв.
    //"Instagram" -> 100 лв.
	//"Reddit" -> 50 лв.
    let index = 0;
    let openTabs = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;
    let fine = 0;
    let tab = input[index];
    for(let i=1; i<=openTabs; i++) {
        tab = input[index];
        index++;
        switch (tab) {
            case "Facebook": fine += 150; break; 
            case "Instagram": fine += 100; break;
            case "Reddit": fine += 50; break;
        }
    }
    salary = salary-fine;
    if (salary > 0) {
        console.log(salary.toFixed(0));
    } else {
        console.log("You have lost your salary.");
    }
}
salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])
