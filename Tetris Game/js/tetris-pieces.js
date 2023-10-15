function drawPiece(p, x, y, m, id) { 
	var pieceId = (id) ? PIECE_CONTROL : p + "" + (new Date()).getTime();
	
	var squares = getPieceSquares(p, x, y, m).split(",");
	for (var i = 0, imax = squares.length; i < imax; i ++) { 
		if (i === 0) { 
			$('#board').find(".square[id='" + squares[i] + "']").addClass("piece" + p).attr("piece-id", pieceId).attr("piece-catch", "yes").attr("piece-move", m);
		} else { 
			$('#board').find(".square[id='" + squares[i] + "']").addClass("piece" + p).attr("piece-id", pieceId);
		}
	}
	
	return pieceId;
}

function drawPieceNext(p) { 
	$('#board-next').find('.square').attr("class", "square");
	if (PIECE_NEXT_MASKED) $('#board-next').find('.square').addClass("masked");

	var squares = getPieceSquares(p, 3, 2, 1).split(",");
	for (var i = 0, imax = squares.length; i < imax; i ++) { 
		$('#board-next').find(".square[id='next-" + squares[i] + "']").addClass("piece" + p);
	}
}

function getPieceControlId() { 
	return $('#board').find(".square[piece-id='" + PIECE_CONTROL + "'][piece-catch='yes']").attr("id");
}
function getPieceControlPositionY() { 
	return parseInt(getPieceControlId().split("-")[1]);
}
function getPieceControlPositionX() { 
	return parseInt(getPieceControlId().split("-")[2]);
}
function getPieceControlType() { 
	return parseInt($('#board').find(".square[id='" + getPieceControlId() + "']").attr("class").split("piece")[1]);
}
function getPieceControlRotate() { 
	return parseInt($('#board').find(".square[piece-id='" + PIECE_CONTROL + "'][piece-catch='yes']").attr("piece-move"));
}

function pieceDown() { 
	var c = getPieceControlId();
	var y = getPieceControlPositionY();
	var x = getPieceControlPositionX();
	var p = getPieceControlType();
	var m = getPieceControlRotate();
			
	if (canMove(p, x, y - 1, m, PIECE_CONTROL)) { 
		$('#board').find(".square[piece-id='" + PIECE_CONTROL + "']").removeClass("piece" + p).removeAttr("piece-id").removeAttr("piece-catch").removeAttr("piece-move");
		drawPiece(p, x, y - 1, m, PIECE_CONTROL);
		$('#board').find(".square[piece-id='" + PIECE_CONTROL + "'][piece-catch='yes']").attr("piece-move", m);
	} else { 
		clearInterval(PIECE_DOWN_TIMER);
		PIECE_DOWN_TIMER = -1;
		PIECE_CONTROL = "NULL";
		
		playDropSound();
		scanLines();
	}
}

function disablePiece() { 
	if (PIECE_DISABLED_Y === (LINES_MAX_Y + 1) && PIECE_DISABLED_X === 1) { 
		clearInterval(PIECE_DISABLED_TIMER);
		PIECE_DISABLED_TIMER = -1;
		GAME_OVER = true;
		message("game over");
		refreshHighScores();
	} else { 
		$('#board').find(".square[id='s-" + PIECE_DISABLED_Y + "-" + PIECE_DISABLED_X + "']").attr("class", "square disabled");
		if (PIECE_DISABLED_X < (LINES_MAX_X + 1)) PIECE_DISABLED_X ++;
		
		if (PIECE_DISABLED_X === (LINES_MAX_X + 1)) { 
			PIECE_DISABLED_X = 1;
			if (PIECE_DISABLED_Y < (LINES_MAX_Y + 1)) PIECE_DISABLED_Y ++;
		}
	}
}

function nextPiece() { 
	PIECE_NEXT = Math.floor( Math.random() * ( 7 - 1 + 1 ) + 1 );
	drawPieceNext(PIECE_NEXT);
}

function onePieceForMe() { 
	PLAYER_SCORE_BONUS = 0;
	PIECE_CONTROL = drawPiece(PIECE_NEXT, PIECE_START_X, PIECE_START_Y, 1);
	nextPiece();
}
function launchOnePiece() { 
	if (PIECE_NEXT < 0) { 
		nextPiece();
	}
	
	if (PIECE_DOWN_TIMER > -1) { 
		clearInterval(PIECE_DOWN_TIMER);
	}
	
	if ( !$('#board').find(".square[id='s-" + PIECE_START_Y + "-" + PIECE_START_X + "']").attr("piece-id") || $('#board').find(".square[id='s-" + PIECE_START_Y + "-" + PIECE_START_X + "']").attr("piece-id") === "" ) { 
		onePieceForMe();
		PIECE_DOWN_TIMER = setInterval('pieceDown()', PLAYER_SPEED);
	} else { 
		onePieceForMe();
		gameover();
	}
}

function nextMasked() { 
	if (PIECE_NEXT_MASKED) { 
		$("#control div.view-next").addClass("not");
		$('#board-next').find(".square").removeClass("masked");
		PIECE_NEXT_MASKED = false;
	} else { 
		$("#control div.view-next").removeClass("not");
		$('#board-next').find(".square").addClass("masked");
		PIECE_NEXT_MASKED = true;
	}
}

function canMove(p, x, y, m, id) { 

	var squares = getPieceSquares(p, x, y, m).split(",");
	for (var i = 0, imax = squares.length; i < imax; i ++) { 
		if ( 
			$('#board').find(".square[id='" + squares[i] + "']").length < 1 ||  
			$('#board').find(".square[id='" + squares[i] + "'][piece-id!='" + id +"'][class*='piece']").length > 0
			) return false;
	}
	
	return true;
}

function getPieceSquares(p, x, y, m) { 
	var squares = "";
	
	squares += "s-" + y + "-" + x; squares += ",";
	if (p === 1) { 
		if ( m === 1) { 
			squares += "s-" + (y - 1) + "-" + (x + 1); squares += ",";
			squares += "s-" + (y + 1) + "-" + x; squares += ",";
			squares += "s-" + (y - 1) + "-" + x;
		} else if (m === 2) { 
			squares += "s-" + y + "-" + (x + 1); squares += ",";
			squares += "s-" + y + "-" + (x - 1); squares += ",";
			squares += "s-" + (y - 1) + "-" + (x - 1);
		} else if (m === 3) { 
			squares += "s-" + (y + 1) + "-" + (x - 1); squares += ",";
			squares += "s-" + (y - 1) + "-" + x; squares += ",";
			squares += "s-" + (y + 1) + "-" + x;
		} else if (m === 4) { 
			squares += "s-" + y + "-" + (x + 1); squares += ",";
			squares += "s-" + y + "-" + (x - 1); squares += ",";
			squares += "s-" + (y + 1) + "-" + (x + 1);
		}
	} else if (p === 2) { 
		if ( m === 1) { 
			squares += "s-" + (y - 1) + "-" + (x - 1); squares += ",";
			squares += "s-" + (y + 1) + "-" + x; squares += ",";
			squares += "s-" + (y - 1) + "-" + x;
		} else if (m === 2) { 
			squares += "s-" + y + "-" + (x + 1); squares += ",";
			squares += "s-" + y + "-" + (x - 1); squares += ",";
			squares += "s-" + (y + 1) + "-" + (x - 1);
		} else if (m === 3) { 
			squares += "s-" + (y + 1) + "-" + (x + 1); squares += ",";
			squares += "s-" + (y - 1) + "-" + x; squares += ",";
			squares += "s-" + (y + 1) + "-" + x;
		} else if (m === 4) { 
			squares += "s-" + y + "-" + (x + 1); squares += ",";
			squares += "s-" + y + "-" + (x - 1); squares += ",";
			squares += "s-" + (y - 1) + "-" + (x + 1);
		}
	} else if (p === 3) { 
		squares += "s-" + y + "-" + (x + 1); squares += ",";
		squares += "s-" + (y + 1) + "-" + x; squares += ",";
		squares += "s-" + (y + 1) + "-" + (x + 1);
	} else if (p === 4) { 
		if (m === 2 || m === 4) { 
			squares += "s-" + y + "-" + (x + 1); squares += ",";
			squares += "s-" + y + "-" + (x + 2); squares += ",";
			squares += "s-" + y + "-" + (x - 1);
		} else if (m === 1 || m === 3) { 
			squares += "s-" + (y + 1) + "-" + x; squares += ",";
			squares += "s-" + (y + 2) + "-" + x; squares += ",";
			squares += "s-" + (y - 1) + "-" + x;
		}
	} else if (p === 5) { 
		if (m === 1 || m === 3) { 
			squares += "s-" + y + "-" + (x + 1); squares += ",";
			squares += "s-" + (y + 1) + "-" + x; squares += ",";
			squares += "s-" + (y - 1) + "-" + (x + 1);
		} else if (m === 2 || m === 4) { 
			squares += "s-" + y + "-" + (x + 1); squares += ",";
			squares += "s-" + (y - 1) + "-" + x; squares += ",";
			squares += "s-" + (y - 1) + "-" + (x - 1);
		}
	} else if (p === 6) { 
		if (m === 1 || m === 3) { 
			squares += "s-" + y + "-" + (x - 1); squares += ",";
			squares += "s-" + (y - 1) + "-" + (x - 1); squares += ",";
			squares += "s-" + (y + 1) + "-" + x;
		} else if (m === 2 || m === 4) { 
			squares += "s-" + y + "-" + (x - 1); squares += ",";
			squares += "s-" + (y - 1) + "-" + (x + 1); squares += ",";
			squares += "s-" + (y - 1) + "-" + x;
		}
	} else if (p === 7) { 
		if ( m === 1) { 
			squares += "s-" + y + "-" + (x + 1); squares += ",";
			squares += "s-" + (y + 1) + "-" + x; squares += ",";
			squares += "s-" + (y - 1) + "-" + x;
		} else if (m === 2) { 
			squares += "s-" + y + "-" + (x + 1); squares += ",";
			squares += "s-" + y + "-" + (x - 1); squares += ",";
			squares += "s-" + (y - 1) + "-" + x;
		} else if (m === 3) { 
			squares += "s-" + y + "-" + (x - 1); squares += ",";
			squares += "s-" + (y + 1) + "-" + x; squares += ",";
			squares += "s-" + (y - 1) + "-" + x;
		} else if (m === 4) { 
			squares += "s-" + y + "-" + (x + 1); squares += ",";
			squares += "s-" + y + "-" + (x - 1); squares += ",";
			squares += "s-" + (y + 1) + "-" + x;
		}
	}
	
	return squares;
}