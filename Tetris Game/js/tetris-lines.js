function scanLines() { 
	LINES = "";
	LINES_BLINK_COUNTER = 0;
	for (var y = LINES_MAX_Y, ymax = 0; y > ymax; y --) { 
		var line = true;
		for (var x = 1, xmax = LINES_MAX_X + 1; x < xmax; x ++) { 
			if ($('#board').find(".square[id='s-" + y + "-" + x + "'][class*='piece']").length < 1) { 
				line = false;
				break;
			}
		}
		if (line) { 
			if (LINES !== "") LINES += ",";
			LINES += y + "";
		}
	}
	
	scoringBonus();
	
	if (LINES !== "") { 
		LINES_BLINK_TIMER = setInterval('blinkLines()', LINES_BLINK_DELAY);
		if ( LINES.split(",").length < 4 ) { 
			playLineSound();
		} else { 
			playTetrisSound();
		}
		
	} else { 
		launchOnePiece();
	}
}

function blinkLines() { 
	LINES_BLINK_COUNTER ++;
	var lines = LINES.split(",");
	for (var i = 0, imax = lines.length; i < imax; i ++) { 
		if ( $('#board').find(".square[id^='s-" + lines[i] + "-'][class*='piece']").attr("class").indexOf("erase") > -1 ) { 
			$('#board').find(".square[id^='s-" + lines[i] + "-'][class*='piece']").removeClass("erase");
		} else { 
			$('#board').find(".square[id^='s-" + lines[i] + "-'][class*='piece']").addClass("erase");
		}
	}
	
	if (LINES_BLINK_COUNTER > LINES_BLINK_MAX) { 
		LINES_BLINK_COUNTER = 0;
		clearInterval(LINES_BLINK_TIMER);
		LINES_BLINK_TIMER = -1;
		eraseLines();
		launchOnePiece();
		
		scoringLines(lines.length);
	}
}

function eraseLines() { 
	var lines = LINES.split(",");
	for (var i = 0, imax = lines.length; i < imax; i ++) { 
	
		for (var l = lines[i], lmax = LINES_MAX_Y; l < lmax; l ++) { 
			for (var x = 1, xmax = LINES_MAX_X + 1; x < xmax; x ++) { 
				$('#board').find(".square[id='s-" + l + "-" + x + "']").removeClass("erase");
				$('#board').find(".square[id='s-" + l + "-" + x + "']").attr("class", $('#board').find(".square[id='s-" + (parseInt(l) + 1) + "-" + x + "']").attr("class"));
				if ( $('#board').find(".square[id='s-" + (parseInt(l) + 1) + "-" + x + "']").attr("piece-id")) { 
					$('#board').find(".square[id='s-" + l + "-" + x + "']").attr("piece-id", $('#board').find(".square[id='s-" + (parseInt(l) + 1) + "-" + x + "']").attr("piece-id"));
					$('#board').find(".square[id='s-" + l + "-" + x + "']").attr("piece-catch", $('#board').find(".square[id='s-" + (parseInt(l) + 1) + "-" + x + "']").attr("piece-catch"));
					$('#board').find(".square[id='s-" + l + "-" + x + "']").attr("piece-catch", $('#board').find(".square[id='s-" + (parseInt(l) + 1) + "-" + x + "']").attr("piece-catch"));
				} else { 
					$('#board').find(".square[id='s-" + l + "-" + x + "']").removeAttr("piece-id");
					$('#board').find(".square[id='s-" + l + "-" + x + "']").removeAttr("piece-catch");
					$('#board').find(".square[id='s-" + l + "-" + x + "']").removeAttr("piece-move");
				}
				
			
			}
		}
		for (var x = 1, xmax = LINES_MAX_X + 1; x < xmax; x ++) { 
			$('#board').find(".square[id='s-" + LINES_MAX_Y + "-" + x + "']").attr("class", "square");
			$('#board').find(".square[id='s-" + LINES_MAX_Y + "-" + x + "']").removeAttr("piece-id");
			$('#board').find(".square[id='s-" + LINES_MAX_Y + "-" + x + "']").removeAttr("piece-catch");
			$('#board').find(".square[id='s-" + LINES_MAX_Y + "-" + x + "']").removeAttr("piece-move");
		}
	}
	LINES = "";
}