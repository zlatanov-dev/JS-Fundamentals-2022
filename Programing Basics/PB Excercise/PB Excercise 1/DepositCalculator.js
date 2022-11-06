function DepositCalculator(input)
{
    let dsum=Number(input[0]);
    let dsrok=Number(input[1]);
    let dlihva=Number(input[2]);
    let sum= dsum+dsrok*((dsum*(dlihva/100))/12);
    console.log(sum);
}
DepositCalculator([200,3,5.7])