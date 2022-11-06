function fish(input)
{
    let lenght=Number(input[0]);
    let width=Number(input[1]);
    let hight=Number(input[2]);
    let percentage=Number(input[3]);
    let usedSpace=percentage/100;

    let volume=lenght*hight*width;
    let truevolume=volume*0.001;
    let neededWater=(1-usedSpace)*truevolume;
    console.log(neededWater);
}
fish(["85 ","75 ","47 ","17 "]);