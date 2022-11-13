function Supplies(input)
{
    let NpacketPencils= Number(input[0]);
    let NpacketMarkers= Number(input[1]);
    let Lchemicals=Number(input[2]);
    let percentdiscount=Number(input[3]/100);
    let price1=NpacketPencils*5.80;
    let price2=NpacketMarkers*7.20;
    let price3=Lchemicals*1.20;
    let price4=price1+price2+price3;
    let price5=price4-(price4*percentdiscount);
    console.log(price5);
}
Supplies([4,2,5,13])