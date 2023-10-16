var textbox=document.getElementById("inptext");
function uppercase(){
    textbox.value=textbox.value.toUpperCase();
}
function lowercase(){
    textbox.value=textbox.value.toLowerCase();
}
function removextraspace(){
    textbox.value=textbox.value.replace(/\s+/g, ' ').trim();
}
function removextralines(){
    textbox.value=textbox.value.replace(/\n+/g, '\n').trim();
}

inptext.addEventListener("input",()=>{
charcount.innerText=textbox.value.replace(/\s/g, '').length
wordcount.innerText=textbox.value.trim().split(" ").length

})