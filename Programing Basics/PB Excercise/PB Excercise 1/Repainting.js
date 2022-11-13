function repainting(input)
{
    let naylon= Number(1.50);
    let paint= Number(14.50);
    let diluent= Number(5.00);
    
    let Nnaylon= Number(input[0]);
    let SumNnaylon=(Nnaylon+2)*naylon;

    let Npaint= Number(input[1]);
    let SumNpaint=(Npaint+(Npaint*0.10))*paint;

    let Ndiluent= Number(input[2]);
    let SumNdiluent=Ndiluent*diluent;
    
    let Sum=SumNdiluent+SumNnaylon+SumNpaint+0.40;

    let hours= Number(input[3]);
    let Workinghours=hours*(Sum*0.30);
    let allsum= Workinghours+Sum;
    console.log(allsum); 
}
repainting(["10 ","11 ","4 ","8 "])