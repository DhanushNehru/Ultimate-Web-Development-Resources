// Navigation menu
var navBtn = document.getElementById("nav-links");

navBtn.onclick = expandMenu;

function expandMenu() {
	var expandingMenu = document.getElementById("expanding-menu");

	expandingMenu.classList.toggle("hide");
}

// Show value of range input
var rangeInput = document.getElementById("range-input");

rangeInput.oninput = slide;

function slide() {
	var rate = document.getElementById("rate");
	var rangeOutput = document.getElementById("range-output");

	rate.innerHTML = rangeInput.value;

	if (rangeInput.value == 10) {
		rangeOutput.innerHTML = "Disney is great!!";
	} else if (rangeInput.value > 5) {
		rangeOutput.innerHTML = "I like Disney.";
	} else if (rangeInput.value > 0) {
		rangeOutput.innerHTML = "Disney is Okay!";
	} else if (rangeInput.value == 0) {
		rangeOutput.innerHTML = "I don't like Disney at all!";
	}
}

// Change image with mouse hover
var logo = document.getElementById("logo");

logo.onmouseover = showNewLogo;
logo.onmouseout = showOriginalLogo;

function showNewLogo() {
	logo.src = "./images/marvel studios.png";
}

function showOriginalLogo() {
	logo.src = "./images/disney_plus.png";
}

// Add from list of characters to input field
var charForm = document.getElementById("fav-char");
var charInputField = document.getElementById("character");

var char1 = document.getElementById("char-1");
var char2 = document.getElementById("char-2");
var char3 = document.getElementById("char-3");
var char4 = document.getElementById("char-4");

char1.onclick = selectChar1;
char2.onclick = selectChar2;
char3.onclick = selectChar3;
char4.onclick = selectChar4;

function selectChar1(e) {
	charInputField.value = "Din Djarin";
	showResult(e);
}

function selectChar2(e) {
	charInputField.value = "Han Solo";
	showResult(e);
}

function selectChar3(e) {
	charInputField.value = "Luke Skywalker";
	showResult(e);
}

function selectChar4(e) {
	charInputField.value = "Rey";
	showResult(e);
}

// Display input from user
var resultBox = document.getElementById("form-result");

charForm.onsubmit = showResult;
charForm.oninput = showResult;

resultBox.style.display = "none";

function showResult(e) {
	e.preventDefault();
	var charSelect = document.getElementById("char-select");
	var gameInstruct = document.getElementById("game-instruct");

	resultBox.style.display = "block";
	if (charInputField.value != "") {
		charSelect.innerHTML = "You selected: " + charInputField.value;
		gameInstruct.innerHTML =
			"Now play the game to see which character is selected for you!";
	} else {
		charSelect.innerHTML = "Enter your favourite character!";
		gameInstruct.innerHTML = "";
	}
}

// Randomise character
var randomBtn = document.getElementById("random-btn");
var randomResultBox = document.getElementById("random-result");
var compareBtn = document.getElementById("compare-btn");

randomBtn.onclick = showRandom;

randomResultBox.style.display = "none";
compareBtn.style.display = "none";

var randomChar;

function showRandom() {
	randomResultBox.style.display = "flex";

	var randNum = Math.floor(Math.random() * 4 + 1);

	var charName = document.getElementById("char-name");
	var charImg = document.getElementById("char-img");
	var charMovie = document.getElementById("char-movie");
	var charFriend = document.getElementById("char-friend");
	var charNemesis = document.getElementById("char-nemesis");
	var charQuote = document.getElementById("char-quote");

	if (randNum == 1) {
		randomChar = "Din Djarin";
		charName.innerHTML = "<h3>Name: Din Djarin</h3>";
		charImg.src = "./images/din_djarin.png";
		charMovie.innerHTML = "Movie: The Mandalorian (Series)";
		charFriend.innerHTML = "Friend: Grogu";
		charNemesis.innerHTML = "Nemesis: Moff Gideon";
		charQuote.innerHTML =
			'Quote: "I\'m a Mandalorian. Weapons are part of my religion."';
	} else if (randNum == 2) {
		randomChar = "Han Solo";
		charName.innerHTML = "<h3>Name: Han Solo</h3>";
		charImg.src = "./images/han_solo.png";
		charMovie.innerHTML = "Movie: Solo: A Star Wars Story";
		charFriend.innerHTML = "Friend: Chewbacca";
		charNemesis.innerHTML = "Nemesis: Jabba the Hutt";
		charQuote.innerHTML = 'Quote: "Never tell me the odds!"';
	} else if (randNum == 3) {
		randomChar = "Luke Skywalker";
		charName.innerHTML = "<h3>Name: Luke Skywalker</h3>";
		charImg.src = "./images/luke_skywalker.png";
		charMovie.innerHTML = "Movie: Star Wars: Episode IV - A New Hope";
		charFriend.innerHTML = "Friend: R2-D2";
		charNemesis.innerHTML = "Nemesis: Darth Vader";
		charQuote.innerHTML = 'Quote: "I am a Jedi, like my father before me."';
	} else if (randNum == 4) {
		randomChar = "Rey";
		charName.innerHTML = "<h3>Name: Rey</h3>";
		charImg.src = "./images/rey.png";
		charMovie.innerHTML = "Movie: Star Wars: Epise VII - The Force Awakens";
		charFriend.innerHTML = "Friend: BB-8";
		charNemesis.innerHTML = "Nemesis: Kylo Ren";
		charQuote.innerHTML =
			'Quote: "Let\'s see how you could hold up against the power of the Force."';
	} else {
		randomChar = "Din Djarin";
		randomResult.innerHTML = "Whoops! Something went wrong.";
	}

	compareBtn.style.display = "block";
}

// Compare input and random characters
var compareResult = document.getElementById("compare-result");

compareBtn.onclick = compareResults;

compareResult.style.display = "none";

function compareResults() {
	compareResult.style.display = "block";

	if (charInputField.value.toLowerCase() == randomChar.toLowerCase()) {
		compareResult.innerHTML =
			"The character that you selected is the same that you got!";
	} else {
		compareResult.innerHTML = "You didn't get your character.";
	}
}
