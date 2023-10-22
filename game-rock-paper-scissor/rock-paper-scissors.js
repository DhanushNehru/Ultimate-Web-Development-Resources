
let score=JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    loss:0,
    ties:0
};

updateScoreElement();



/*
if(!score)
{
    score={
        wins:0,
        loss:0,
        ties:0
    };
}
  */
let intervalId;
let isAutoPlaying=false;
function autoPlay()
{   if(!isAutoPlaying)
    {
     intervalId=setInterval(function()
        {
            const playerMove=pickComputerMove();
             playGame(playerMove);
        },1000);
        isAutoPlaying=true;
        document.querySelector('.js-autoplay-button').innerHTML='Stop Playing';


    }
    else{
         clearInterval(intervalId);
         isAutoPlaying=false;
         document.querySelector('.js-autoplay-button').innerHTML='Auto Play';
    }
    
}

document.querySelector('.js-rock-button').addEventListener('click',() => {
     playGame('rock');
});
document.querySelector('.js-paper-button').addEventListener('click',() => {
    playGame('paper');
});
document.querySelector('.js-scissors-button').addEventListener('click',() => {
    playGame('scissors');
});
document.querySelector('.js-autoplay-button').addEventListener('click',() => {
       autoPlay();   
});
document.querySelector('.js-reset-button').addEventListener('click',() => {
       showResetConfirmation();
});

document.body.addEventListener('keydown',(event) => {
    if(event.key ==='r')
    {
        playGame('rock');
    }
    else if(event.key ==='p')
    {
        playGame('paper');
    }
    else if(event.key ==='s')
    {
        playGame('scissors');
    }
    else if(event.key==='a')
    {
        autoPlay();
    }
    else if(event.key==='Backspace')
    {
        showResetConfirmation();
    }
});

function playGame(playerMove)
{
    const computerMove=pickComputerMove();

    let result=' ';

    if(playerMove==='scissors')
    {
        if(computerMove==='rock')
        {
            result='You lose';
        }
        else if(computerMove==='paper')
        {
            result='You win';
        }
        else if(computerMove==='scissors')
        {
            result='Tie';
        }
    }
    else if(playerMove==='paper')
    {

        if(computerMove==='rock')
        {
            result='You win';
        }
        else if(computerMove==='paper')
        {
            result='Tie';
        }
        else if(computerMove==='scissors')
        {
            result='You lose';
        }
        
    }
    else if(playerMove==='rock')
    {
        
        if(computerMove==='rock')
        {
            result='Tie';
        }
        else if(computerMove==='paper')
        {
            result='You lose';
        }
        else if(computerMove==='scissors')
        {
            result='You win';
        }
    }

    if(result==='You win')
    {
        score.wins +=1;
    }
    else if(result==='You lose')
    {
        score.loss +=1;
    }
    else if(result==='Tie')
    {
        score.ties +=1;
    }

    localStorage.setItem('score',JSON.stringify(score));
     updateScoreElement();

     document.querySelector('.js-result').innerHTML=result;
     document.querySelector('.js-moves').innerHTML=`You 
            <img src="rock-paper-scissors-images/${playerMove}-emoji.png" class="move-icon">
            <img src="rock-paper-scissors-images/${computerMove}-emoji.png" class="move-icon">
            Computer`;

}

function resetScore()
{
    score.wins=0,
    score.loss=0,
    score.ties=0
    localStorage.removeItem('score');
    updateScoreElement();

}

function showResetConfirmation()
{
    document.querySelector('.js-reset-confirmation').innerHTML=`Are you sure you want to reset the score?
            <button class="js-reset-confirm-yes reset-confirm-button">Yes</button>
            <button class="js-reset-confirm-no reset-confirm-button">No</button>`;

    document.querySelector('.js-reset-confirm-yes').addEventListener('click',() => {
                resetScore();
                hideResetConfirmation();
    });

   
    document.querySelector('.js-reset-confirm-no')
    .addEventListener('click', () => {
    hideResetConfirmation();
    });

}



function hideResetConfirmation()
{
    document.querySelector('.js-reset-confirmation').innerHTML='';
}




function updateScoreElement()
{
    document.querySelector('.js-score').innerHTML=`Wins: ${score.wins},losses: ${score.loss}, Ties:${score.ties}`;
    
}

function pickComputerMove()
    {
        let computerMove = '';
        const randomNumber=Math.random();
        if(randomNumber>=0 && randomNumber<1/3)
        {
            computerMove='rock';
        }
        else if(randomNumber >=1/3 && randomNumber <2/3)
        {
            computerMove='paper';
        }
        else if(randomNumber >=2/3 && randomNumber <1)
        {
            computerMove='scissors';
        }

        return computerMove;
    }