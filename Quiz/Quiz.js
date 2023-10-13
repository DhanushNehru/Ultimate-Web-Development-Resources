const take = document.querySelector(".takeQuiz");

take.innerHTML = "<button  onclick='quiz()'>Take Quiz</button>"

let num1 = "";
let num2 = "";
let sing = "";
function quiz() {
    num1 = randomNum();
    num2 = randomNum();
    sing = randomSing();
    let answer = "";
    if (sing == 1) {
        answer = num1 + num2;
        take.innerHTML = `
        <p>${num1} + ${num2} = ??</p>
        <input type="number">
        <button onclick = 'submit(${answer},document.querySelector("input"))'>Submit</button>
        `
    } else if (sing == 2) {
        answer = num1 - num2;
        take.innerHTML = `
        <p>${num1} - ${num2} = ??</p>
        <input type="number">
        <button onclick = 'submit(${answer},document.querySelector("input"))'>Submit</button>
        `
    } else if (sing == 3) {
        answer = num1 * num2;
        take.innerHTML = `
        <p>${num1} * ${num2} = ??</p>
        <input type="number">
        <button onclick = 'submit(${answer},document.querySelector("input"))'>Submit</button>
        `
    } else {
        answer = num1 / num2;
        take.innerHTML = `
        <p>${num1} / ${num2} = ??</p>
        <input type="number">
        <button onclick = 'submit(${answer},document.querySelector("input"))'>Submit</button>
        `
    }
}
function submit(val, target) {
    if (target.value == val) {
        take.innerHTML = `
        <p>Your answer is correct</p>
        <button onclick = 'retake()'>Re-Take</button>
        `
    } else {
        take.innerHTML = `
        <p>Your answer is wrong</p>
        <button onclick = 'retake()'>Retry</button>
        `
    }
}

function retake() {
    quiz();
}
function randomSing() {
    return Math.floor(Math.random() * 4) + 1; 
}
function randomNum() {
    
    let ref = Math.floor(Math.random() * 100) + 1; 
    return ref;
}
