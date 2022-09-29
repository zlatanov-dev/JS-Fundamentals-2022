function solve(loses, helmet, sword, shield, armor) {
let helmetCount = 0;
let swordCount = 0;
let shieldCount = 0;
let armorCount = 0;
for(let i = 1; i<=loses; i++) {
    if ( i % 2 === 0 && i % 3 === 0) {
        shieldCount +=1;
        helmetCount +=1;
        swordCount +=1;
    }else if(i % 2 == 0) {
        helmetCount +=1;
    } else if (i % 3 === 0) {
        swordCount +=1;
    }
}
if (shieldCount%2 === 0) {
    armorCount = shieldCount/2;
}
let helmetAll = helmetCount*helmet
let swordAll = swordCount*sword 
let shieldAll = shieldCount*shield
let armorAll = armorCount*armor
let result = helmetAll+swordAll+shieldAll+armorAll;

console.log(`Gladiator expenses: ${result.toFixed(2)} aureus`);
}
solve(23,
    12.50,
    21.50,
    40,
    200
    )