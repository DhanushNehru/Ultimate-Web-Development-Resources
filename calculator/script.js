const ac=document.querySelector(".ac");
const de=document.querySelector(".de");
const point=document.querySelector(".point");
const nine=document.querySelector(".nine");
const eight=document.querySelector(".eight");
const seven=document.querySelector(".seven");
const six=document.querySelector(".six");
const five=document.querySelector(".five");
const four=document.querySelector(".four");
const three=document.querySelector(".three");
const two=document.querySelector(".two");
const one=document.querySelector(".one");
const dzero=document.querySelector(".dzero");
const zero=document.querySelector(".zero");
const slash=document.querySelector(".slash");
const mul=document.querySelector(".mul");
const sub=document.querySelector(".sub");
const add=document.querySelector(".add");
const equal=document.querySelector(".equal");
const display=document.querySelector('.display');

var calc="";

ac.addEventListener("click",()=>{
    calc="";
    display.innerHTML=calc;
})
de.addEventListener("click",()=>{
    calc=calc.slice(0,-1);
    display.innerHTML=calc;
})
nine.addEventListener("click",()=>{
    calc=calc+"9";
    display.innerHTML=calc;
})
eight.addEventListener("click",()=>{
    calc=calc+"8";
    display.innerHTML=calc;
})
seven.addEventListener("click",()=>{
    calc=calc+"7";
    display.innerHTML=calc;
})
six.addEventListener("click",()=>{
    calc=calc+"6";
})
five.addEventListener("click",()=>{
    calc=calc+"5";
    display.innerHTML=calc;
})
four.addEventListener("click",()=>{
    calc=calc+"4";
    display.innerHTML=calc;
})
three.addEventListener("click",()=>{
    calc=calc+"3";
    display.innerHTML=calc;
})
two.addEventListener("click",()=>{
    calc=calc+"2";
    display.innerHTML=calc;
})
one.addEventListener("click",()=>{
    calc=calc+"1";
    display.innerHTML=calc;
})
zero.addEventListener("click",()=>{
    calc=calc+"0";
    display.innerHTML=calc;
})
dzero.addEventListener("click",()=>{
    calc=calc+"00";
    display.innerHTML=calc;
})
slash.addEventListener("click",()=>{
    calc=calc+"/";
    display.innerHTML=calc;
})
mul.addEventListener("click",()=>{
    calc=calc+"*";
    display.innerHTML=calc;
})
sub.addEventListener("click",()=>{
    calc=calc+"-";
    display.innerHTML=calc;
})
add.addEventListener("click",()=>{
    calc=calc+"+";
    display.innerHTML=calc;
})
point.addEventListener("click",()=>{
    calc=calc+".";
    display.innerHTML=calc;
})
equal.addEventListener("click",()=>{
    calc=eval(calc);
    display.innerHTML=calc;
})



