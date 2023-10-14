function refreshPlayer() { 
	if (PLAYER_SCORE > PLAYER_SCORE_MAXIMUM) { 
		PLAYER_SCORE = PLAYER_SCORE_MAXIMUM;
		gameover();
	}

	$("#level span").html(PLAYER_LEVEL);
	$("#lines span").html(commafy(PLAYER_LINES));
	$("#score span").html(commafy(PLAYER_SCORE));
}

function refreshHighScores() { 
	if (PLAYER_SCORE > SCORE_1) { 
		SCORE_5 = SCORE_4; SCORE_5_NAME = SCORE_4_NAME;
		SCORE_4 = SCORE_3; SCORE_4_NAME = SCORE_3_NAME;
		SCORE_3 = SCORE_2; SCORE_3_NAME = SCORE_2_NAME;
		SCORE_2 = SCORE_1; SCORE_2_NAME = SCORE_1_NAME;
		SCORE_1 = PLAYER_SCORE; ENTER_NAME = 1; SCORE_1_NAME = SCORE_NAME_DEFAULT;
	} else if (PLAYER_SCORE > SCORE_2) { 
		SCORE_5 = SCORE_4; SCORE_5_NAME = SCORE_4_NAME;
		SCORE_4 = SCORE_3; SCORE_4_NAME = SCORE_3_NAME;
		SCORE_3 = SCORE_2; SCORE_3_NAME = SCORE_2_NAME;
		SCORE_2 = PLAYER_SCORE; ENTER_NAME = 2; SCORE_2_NAME = SCORE_NAME_DEFAULT;
	} else if (PLAYER_SCORE > SCORE_3) { 
		SCORE_5 = SCORE_4; SCORE_5_NAME = SCORE_4_NAME;
		SCORE_4 = SCORE_3; SCORE_4_NAME = SCORE_3_NAME;
		SCORE_3 = PLAYER_SCORE; ENTER_NAME = 3; SCORE_3_NAME = SCORE_NAME_DEFAULT;
	} else if (PLAYER_SCORE > SCORE_4) { 
		SCORE_5 = SCORE_4; SCORE_5_NAME = SCORE_4_NAME;
		SCORE_4 = PLAYER_SCORE; ENTER_NAME = 4; SCORE_4_NAME = SCORE_NAME_DEFAULT;
	} else if (PLAYER_SCORE > SCORE_5) { 
		SCORE_5 = PLAYER_SCORE; ENTER_NAME = 5; SCORE_5_NAME = SCORE_NAME_DEFAULT;
	}
	
	$("#score1").html(commafy(SCORE_1)); $("#name1").html(SCORE_1_NAME);
	$("#score2").html(commafy(SCORE_2)); $("#name2").html(SCORE_2_NAME);
	$("#score3").html(commafy(SCORE_3)); $("#name3").html(SCORE_3_NAME);
	$("#score4").html(commafy(SCORE_4)); $("#name4").html(SCORE_4_NAME);
	$("#score5").html(commafy(SCORE_5)); $("#name5").html(SCORE_5_NAME);
	
	if ( $("#control").css("display") !== "none" ) { 
		$("#name" + ENTER_NAME).html('<input type="text" id="name-input" name="name-input" size="10" maxlength="7">');
		$("#name-input").tap(function(e) { 
			e.stopPropagation();
		});
		setTimeout(function() { $('#name-input').get(0).focus() }, 2500);
	}
}

function scoringLines(l) { 
	var s = 0;
	if (l === 1) { 
		s = 40;
	} else if (l === 2) { 
		s = 100;
	} else if (l === 3) { 
		s = 300;
	} else if (l === 4) { 
		s = 1200;
	}
	s = s * (PLAYER_LEVEL + 1);
	PLAYER_SCORE += parseInt(s);
	PLAYER_LINES += l;
	PLAYER_LINES_LEVEL += l;
	if (PLAYER_LINES_LEVEL > 9 && PLAYER_LEVEL < 9) { 
		PLAYER_LINES_LEVEL = 0;
		PLAYER_LEVEL += 1;
		PLAYER_SPEED = PLAYER_SPEED_DEFAULT - (PLAYER_LEVEL * PLAYER_SPEED_DELAY);
		clearInterval(PIECE_DOWN_TIMER);
		PIECE_DOWN_TIMER = -1;
		PIECE_DOWN_TIMER = setInterval('pieceDown()', PLAYER_SPEED);
	}
	refreshPlayer();
}

function scoringBonus() { 
	PLAYER_SCORE += PLAYER_SCORE_BONUS;
	refreshPlayer();
}