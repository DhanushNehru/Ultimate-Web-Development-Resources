let gameSq = [];
let userSq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let maxLevel = 0;

let h2 = document.querySelector('h2');

document.addEventListener('keypress', function () {
    if (!started) {
        console.log("started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() {
    userSq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // choose random button
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    gameSq.push(randColor);
    let randBtn = document.querySelector(`.${randColor}`);
    btnFlash(randBtn);
}

function checkSeq(idx) {
    if(userSq[idx] === gameSq[idx]) {
        if(userSq.length === gameSq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        reset();
        over();
        h2.innerHTML = `Game Over! Your score was ${maxLevel-1} <br> Press any key to Start again`;
    }
}

function btnPress () {
    let btn = this;
    btnFlash(btn);
    let userColor = btn.getAttribute("id");
    userSq.push(userColor);

    checkSeq(userSq.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    maxLevel = Math.max(level, maxLevel);
    started = false;
    gameSq = [];
    userSq = [];
    level = 0;
}

let body = document.querySelector('body');
function over() {
    body.classList.add("game-over");
    setTimeout(function () {
        body.classList.remove("game-over");
    }, 250);
}