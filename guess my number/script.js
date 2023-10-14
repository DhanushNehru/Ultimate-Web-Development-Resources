'use strict';
const secretnumber = Math.trunc(Math.random()*20)+1;
let score =20;
let highscore =0;


function playSound() {
    var audio = document.getElementById("myAudio");
    audio.play();
  }

  function playsadSound() {
    var audio = document.getElementById("mysadAudio");
    audio.play();
  }
  

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        document.querySelector('.message').textContent='😒 No number!';
    }
    else if(guess===secretnumber)
{
 
    document.querySelector('.number').textContent=secretnumber;
    document.querySelector('.message').textContent='Correct number';
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width='30rem';
    playSound();

    if(score>highscore)
    {
       highscore=score;
       document.querySelector('.highscore').textContent=highscore;
    }
}
else if (guess>secretnumber)
{
    if(score>0)
    {
document.querySelector('.message').textContent='too high!';
score=score-1;
document.querySelector('.score').textContent=score;
}
else{
    document.querySelector('.message').textContent='you lost the game!';
    playsadSound();
    document.querySelector('body').style.backgroundColor='#FF0000';
}
}
else if(guess<secretnumber){
    if(score>0)
    {
    document.querySelector('.message').textContent='too low!';
    score--;
    document.querySelector('.score').textContent=score;
}
else{
    playsadSound();
    document.querySelector('.message').textContent='you lost the game!';
    document.querySelector('.number').textContent='😢';
}
}
});
document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.score').value='20';
    document.querySelector('.score').textContent='20';
    document.querySelector('.message').textContent='start guessing';
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value=null;
});