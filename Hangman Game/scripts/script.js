

const wordDisplay=document.querySelector(".word-display");
const guessesText=document.querySelector(".guesses-text b");
const keyboardDiv=document.querySelector(".keyboard");
const hmanImage=document.querySelector(".hman-box img");
const gameModal= document.querySelector(".game-modal");
const playAgainBtn= gameModal.querySelector("button");

let currentWord, correctLetters, wrongGuessCount;
const maxGuesses=6;
const resetGame=()=>{
    correctLetters=[];
    wrongGuessCount=0;
    hmanImage.src=`images/hangman-0.svg` ;
    guessesText.innerText=`${wrongGuessCount}/ ${maxGuesses}`;  
    wordDisplay.innerHTML=currentWord.split("").map(()=>`<li class="letter"></li>`).join("");
    keyboardDiv.querySelectorAll("button").forEach(btn=>btn.disabled= false);
    gameModal.classList.remove("show");
}


const getRandom=() =>{
    const {word,hint}=wordList[Math.floor(Math.random()* wordList.length)];
    currentWord=word;
    console.log(word,hint); 
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
    
}

const gameOver= (isVictory) =>
{
    setTimeout(()=>{
        const modalText= isVictory? `You found the word:` : `The correct word was:` ;
        gameModal.querySelector("img").src= `images/${isVictory ? 'victory' : 'lost'}.gif` ;
        gameModal.querySelector("h4").innerText= `${isVictory ? 'Congrats!' : 'Game Over!'}` ;
        gameModal.querySelector("p").innerHTML= `${modalText} <b>${currentWord}</b>` ;
        gameModal.classList.add("show");
    },300);
}


const initGame=(button, clickedLetter)=>{
    console.log(button, clickedLetter);
    if(currentWord.includes(clickedLetter)){
        [...currentWord].forEach((letter,index)=> {
            if(letter===clickedLetter){
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText=letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        })
        
    }
    else{
       wrongGuessCount++;
       hmanImage.src=`images/hangman-${wrongGuessCount}.svg` ;
    }


    button.disabled=true;
    guessesText.innerText=`${wrongGuessCount}/ ${maxGuesses}`;

    if(wrongGuessCount===maxGuesses) return gameOver(false);
    if(correctLetters.length=== currentWord.length) return gameOver(true);
}




for(let i=97;i<=122;i++){
    const button=document.createElement("button");
    button.innerText=String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e=> initGame(e.target, String.fromCharCode(i)));
}

getRandom();
playAgainBtn.addEventListener("click", getRandom);
