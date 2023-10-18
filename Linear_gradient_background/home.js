const button =document.getElementsByClassName('btn')[0]
const text =document.getElementsByClassName('text')[0]
const container = document.getElementsByClassName('container')[0]
 function displayDate(){ 
    let colours =[];
let m = Math.floor(Math.random()*6)+2;
for(let i =0; i<m ; i++){
    let colour=`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
    colours.push(colour)
}
let value =container.style.background =`linear-gradient(${Math.floor(Math.random() * 360)}deg, ${colours.join(',')})`;
text.innerHTML =value

}

button.addEventListener("click", displayDate);
