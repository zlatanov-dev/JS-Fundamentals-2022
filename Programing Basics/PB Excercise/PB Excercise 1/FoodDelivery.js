function food(input)
{
    let chicken=10.35;
    let fish=12.40;
    let vegeterian=8.15;

    let allchicken=chicken*input[0];
    let allfish=fish*input[1];
    let allvegeterian=vegeterian*input[2];
    let sum = allchicken+allfish+allvegeterian;

    let desert = sum*0.20;
    let delivery=2.5;
    let finalsum=sum+desert+delivery;
    console.log(finalsum);
}   
food(["2","4","3"]);