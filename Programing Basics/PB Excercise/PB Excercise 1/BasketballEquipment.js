function basketball(input)
{
    let tax=Number(input[0]);
    let sneakers=tax-(tax*0.40);
    let clothes=sneakers-(sneakers*0.20);
    let ball=clothes/4;
    let accsessories=ball/5;
    let all=accsessories+ball+clothes+sneakers+tax;
    console.log(all);
}   
basketball([365])