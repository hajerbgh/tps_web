var x= 5; //porté fctnelle
let y= 3; // portée bloc
const z=2;// portée bloc
//bloc
{
    var x=6;//redefinit x partout
    let y=2;// local
    const z=1 //local
   // console.log("bloc x=",x," y=",y," z=",z);
}
console.log("hors bloc x=",x," y=",y," z=",z);