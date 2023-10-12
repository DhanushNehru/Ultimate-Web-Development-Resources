var DROP_SOUND = new buzz.sound([
    "./sound/drop.ogg",
    "./sound/drop.mp3" 
]);
var LINE_SOUND = new buzz.sound([
    "./sound/line.ogg",
    "./sound/line.mp3" 
]);
var TETRIS_SOUND = new buzz.sound([
    "./sound/tetris.ogg",
    "./sound/tetris.mp3" 
]);
var MOVE_SOUND = new buzz.sound([
    "./sound/move.ogg",
    "./sound/move.mp3" 
]);
var ROTATE_SOUND = new buzz.sound([
    "./sound/rotate.ogg",
    "./sound/rotate.mp3" 
]);
var GAMEOVER_SOUND = new buzz.sound([
    "./sound/gameover.ogg",
    "./sound/gameover.mp3" 
]);
var THEME_SOUND = new buzz.sound([
    "./sound/theme.ogg",
    "./sound/theme.mp3" 
]);

var GROUP_SOUND = new buzz.group([ DROP_SOUND, LINE_SOUND, TETRIS_SOUND, MOVE_SOUND, ROTATE_SOUND, GAMEOVER_SOUND, THEME_SOUND ]);

function isAvailableSound() { 
	return !($("#sound").css("display") === "none");
}
function loadAllSound() { 
	if ( isAvailableSound() ) GROUP_SOUND.load();
}
function stopAllSound() { 
	if (isAvailableSound()) { 
		GROUP_SOUND.stop();
	}
}
function muteAllSound() { 
	if (isAvailableSound()) { 
		GROUP_SOUND.mute();
	}
}
function unmuteAllSound() { 
	if (isAvailableSound()) { 
		GROUP_SOUND.unmute();
	}
}



function playDropSound() { 
	if ( isAvailableSound() ) { 
		ROTATE_SOUND.stop();
		MOVE_SOUND.stop();
		DROP_SOUND.stop();
		DROP_SOUND.play();
	}
}
function playLineSound() { 
	if ( isAvailableSound() ) { 
		ROTATE_SOUND.stop();
		MOVE_SOUND.stop();
		LINE_SOUND.play();
	}
}
function playTetrisSound() { 
	if ( isAvailableSound() ) { 
		ROTATE_SOUND.stop();
		MOVE_SOUND.stop();
		TETRIS_SOUND.play();
	}
}
function playMoveSound() { 
	if ( isAvailableSound() ) { 
		MOVE_SOUND.stop();
		MOVE_SOUND.play();
	}
}
function playRotateSound() { 
	if ( isAvailableSound() ) { 
		ROTATE_SOUND.stop();
		ROTATE_SOUND.play();
	}
}

function playGameoverSound() { 
	if ( isAvailableSound() ) { 
		GAMEOVER_SOUND.play();
	}
}
function stopGameoverSound() { 
	if ( isAvailableSound() ) { 
		GAMEOVER_SOUND.stop();
	}
}

function playThemeSound() { 
	if ( isAvailableSound() ) { 
		THEME_SOUND.loop();
		THEME_SOUND.play();
	}
}
function pauseThemeSound() { 
	if ( isAvailableSound() ) { 
		LINE_SOUND.stop();
		TETRIS_SOUND.stop();
		THEME_SOUND.pause();
	}
}
function stopThemeSound() { 
	if ( isAvailableSound() ) { 
		THEME_SOUND.stop();
	}
}