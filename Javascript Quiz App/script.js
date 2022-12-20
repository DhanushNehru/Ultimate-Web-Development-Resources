const questions =[
    {
        'que': 'Which of the following is the Markup Language?',
        'a': 'CSS',
        'b': 'Java',
        'c': 'HTML',
        'd':'Python',
        'correct': 'c'
    },

    {
        'que': 'What is the Full form of HTML?',
        'a': 'HyperText Markup Language',
        'b': 'HetroText Markup Language',
        'c': 'HyperTransfer Markup Language',
        'd':'HyperText4 Makeup Language',
        'correct': 'a'
    },
    {
        'que': 'Which of the following is the Scripting Language?',
        'a': 'CSS',
        'b': 'Java',
        'c': 'HTML',
        'd':'Javascript',
        'correct': 'd'
    }



]

let index=0;
let total = questions.length;
let right =0, wrong =0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {

    if(index === total){
return endQuiz();
    }
    reset(); 

const data = questions[index]
console.log(data)
quesBox.innerHTML= `${index+1}) ${data.que}`;
optionInputs[0].nextElementSibling.innerText= data.a;
optionInputs[1].nextElementSibling.innerText= data.b;
optionInputs[2].nextElementSibling.innerText= data.c;
optionInputs[3].nextElementSibling.innerText= data.d;
}


const submitQuiz= () => {
const data = questions[index];
const ans = getAnswer()

    if(ans === data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}


const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked){
                answer=  input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}


const endQuiz= () => {
    document.getElementById("box").innerHTML= `
    <h3>Thank you Playing the Quiz</h3>
    <h2> ${right} out of ${total} are correct</h2>
    `
}
// Initial Call 
loadQuestion();