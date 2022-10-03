function solve(day, age) {
    let ticket = 0;
    if (0 <= age && age <= 18) {
        if(day === 'Weekday') {
            ticket = 12 ;
        } else if ( day === 'Weekend') {
            ticket = 15;
        } else if ( day === 'Holiday') {
            ticket = 5;
        }
    } else if ( 18 < age && age <= 64) {
        if(day === 'Weekday') {
            ticket = 18 ;
        } else if ( day === 'Weekend') {
            ticket = 20;
        } else if ( day === 'Holiday') {
            ticket = 12;
        }
    } else if ( 64 < age && age <= 122) {
        if(day === 'Weekday') {
            ticket = 12 ;
        } else if ( day === 'Weekend') {
            ticket = 15;
        } else if ( day === 'Holiday') {
            ticket = 10;
        }
    } else {
        console.log("Error!");
    }
    if( 0 <= age && age <= 122)
    console.log(`${ticket}$`);
}
solve('Weekend', 133)