function YardGreening(input)
{
    let kvm=7.61;
    let result1= kvm*input[0];
    let discount=0.18*result1;
    let result2= result1-discount;
    console.log(`The final price is: ${result2} lv.`);
    console.log(`The discount is: ${discount} lv.`);

}
YardGreening([550])