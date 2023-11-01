const takeQuizContainer = document.querySelector(".takeQuiz");

function generateQuiz() {
    const num1 = randomNum();
    const num2 = randomNum();
    const sing = randomSign();
    const answer = calculateAnswer(num1, num2, sing);

    takeQuizContainer.innerHTML = `
        <p>${num1} ${getSignSymbol(sing)} ${num2} = ??</p>
        <input type="number" id="userAnswer">
        <button onclick="submitAnswer(${answer})">Submit</button>
    `;
}

function calculateAnswer(num1, num2, sing) {
    switch (sing) {
        case 1: return num1 + num2;
        case 2: return num1 - num2;
        case 3: return num1 * num2;
        case 4: return num1 / num2;
        default: return NaN;
    }
}

function getSignSymbol(sing) {
    switch (sing) {
        case 1: return '+';
        case 2: return '-';
        case 3: return '*';
        case 4: return '/';
        default: return '';
    }
}

function submitAnswer(correctAnswer) {
    const userAnswerInput = document.getElementById("userAnswer");
    const userAnswer = parseFloat(userAnswerInput.value);

    if (isNaN(userAnswer)) {
        takeQuizContainer.innerHTML = `<p>Please enter a valid number.</p>`;
    } else if (userAnswer === correctAnswer) {
        takeQuizContainer.innerHTML = `
            <p>Your answer is correct</p>
            <button onclick="generateQuiz()">Re-Take</button>
        `;
    } else {
        takeQuizContainer.innerHTML = `
            <p>Your answer is wrong</p>
            <button onclick="generateQuiz()">Retry</button>
        `;
    }
}

function randomSign() {
    return Math.floor(Math.random() * 4) + 1;
}

function randomNum() {
    return Math.floor(Math.random() * 100) + 1;
}

generateQuiz();
