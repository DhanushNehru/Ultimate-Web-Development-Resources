let input1=document.getElementsByTagName("input")[0];
let input2=document.getElementsByTagName("input")[1];
let cross=document.getElementsByClassName("cross")[0];
let container=document.getElementsByClassName("container")[0];
let result=document.getElementsByClassName("result")[0];
let submit=document.getElementById("submit");
let popup=document.getElementsByClassName("popup")[0];
submit.addEventListener('click',()=>{
    if(input1.value===''||input2.value===''){
        alert('Both the input field must contain a name.')
    }
    else{
    let num = Math.floor((Math.random()*99)+1);
    popup.classList.add("d-flex");
    container.classList.remove("d-flex");
    container.classList.add("d-none");
    result.innerHTML="<p>"+num+"%</p>";
    input1.value='';
    input2.value='';

}
})
cross.addEventListener('click',()=>{
    popup.classList.remove("d-flex");
    container.classList.add("d-flex");
})
document.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'){
        submit.click();
    }
})