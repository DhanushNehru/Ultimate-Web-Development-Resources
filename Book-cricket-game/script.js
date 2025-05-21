let runs1 = 0;
let outs1 = 0;
let runs2 = 0;
let outs2 = 0;

function hit1() {
  const randomNumber1 = Math.floor(Math.random() * 10); // Generates random number between 0 and 9
  if (randomNumber1 === 0 || randomNumber1 === 5) {
    outs1++;
  } else if (randomNumber1 === 1 || randomNumber1 === 2 || randomNumber1 === 3 || randomNumber1 === 4 || randomNumber1 === 6) {
    runs1 += randomNumber1;
  } else {
    runs1 += 1;
    current1 = 0;
  }
  current1 = randomNumber1;
  updateScore1();
}

function updateScore1() {
  document.getElementById("score1").textContent = runs1;
  document.getElementById("outs1").textContent = outs1;
  document.getElementById("current1").textContent = current1;
}

// function hit2() {
//   const randomNumber2 = Math.floor(Math.random() * 10); // Generates random number between 0 and 9
//   if (randomNumber2 === 0 || randomNumber2 === 5) {
//     outs2++;
//   } else if (randomNumber2 === 1 || randomNumber2 === 2 || randomNumber2 === 3 || randomNumber2 === 4 || randomNumber2 === 6) {
//     runs2 += randomNumber2;
//   } else {
//     runs2 += 1;
//     current2 = 0;
//   }
//   current2 = randomNumber2;
//   updateScore2();
// }

// function updateScore2() {
//   document.getElementById("score2").textContent = runs2;
//   document.getElementById("outs2").textContent = outs2;
//   document.getElementById("current2").textContent = current2;
// }

// if (outs1>=10 || outs2>=10){
//   if (runs1 === runs2){
//     return ("The game is a tie")
//   } else if (runs1 > runs2) {
//     return ("Player 1 is the winner")
//   } else {
//     return ("Player 2 is the winner")
//   }
// }