let runs = 0;
let outs = 0;

function hit() {
  const randomNumber = Math.floor(Math.random() * 10); // Generates random number between 0 and 9
  if (randomNumber === 0) {
    outs++;
  } else if (randomNumber === 1 || randomNumber === 2 || randomNumber === 3 || randomNumber === 4 || randomNumber === 6) {
    runs += randomNumber;
  }
  updateScore();
}

function updateScore() {
  document.getElementById("score").textContent = runs;
  document.getElementById("outs").textContent = outs;
}
