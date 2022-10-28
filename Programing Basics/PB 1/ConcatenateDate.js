function Concatenated(input)
{
    let firstName=input[0];
    let lastName=input[1];
    let age=input[2];
    let town=input[3]
    //You are <firstName> <lastName>, a <age>-years old person from <town>.
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`)
}
Concatenated(["Yasen","Zlatanov","24","Targovishte"]);