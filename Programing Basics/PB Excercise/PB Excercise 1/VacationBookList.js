function Vacation(input)
{
    let pageNumber=Number(input[0]);
    let pageForHour=Number(input[1]);
    let days=Number(input[2]);
    let result=((input[0]/input[1])/input[2]);
    console.log(result);
}
Vacation(["212 ","20 ","2 "]);