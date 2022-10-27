var test1 = Math.random() * 6;
var randomNumber1 = Math.floor(test1 + 1);

var randomDice1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomDice1);

var test2 = Math.random() * 6;
var randomNumber2 = Math.floor(test2 + 1);

var randomDice2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomDice2);

if (randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}  
else if (randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩"
}
else 
{
    document.querySelector("h1").innerHTML = "Draw!"
}
