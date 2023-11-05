const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resumeButton = document.getElementById("resume");
const pauseButton = document.getElementById("pause");
const newButton = document.getElementById("new-recording");
const audioContainer = document.getElementById("audio-contaier");
const audioPlayer = document.getElementById("audio-player");
let output = document.getElementById("output");
let audioRecorder;
let audioChunks = [];
let isAudioPermissionGranted = false;

if (!navigator.mediaDevices.getUserMedia) {
  alert("Audio recording is not supported in this browser.");
}

navigator.mediaDevices
  .getUserMedia({ audio: true })
  .then((stream) => {
    isAudioPermissionGranted = true;
    // Initialize the media recorder object
    audioRecorder = new MediaRecorder(stream);

    // dataavailable event is fired when the recording is stopped
    audioRecorder.addEventListener("dataavailable", (e) => {
      audioChunks.push(e.data);
    });

    // start recording when the start button is clicked
    startButton.addEventListener("click", () => {
      audioChunks = [];
      audioRecorder.start();
      output.innerHTML = "Recording started! Speak now.";
      startButton.style.display = "none";
      stopButton.style.display = "";
      pauseButton.style.display = "";
    });

    // stop recording when the stop button is clicked
    stopButton.addEventListener("click", () => {
      audioRecorder.stop();
      newButton.style.display = "";
      resumeButton.style.display = "none";
      pauseButton.style.display = "none";
      stopButton.style.display = "none";
      output.innerHTML = "Your Recording";
      document.getElementById("timer").innerHTML = "";
      document.getElementById("audio-container").style.display = "";

      audioRecorder.onstop = function () {
        setRecording();
      };
    });

    pauseButton.addEventListener("click", () => {
      audioRecorder.pause();
      output.innerHTML = "Recording Paused!";
    });

    resumeButton.addEventListener("click", () => {
      audioRecorder.resume();
      output.innerHTML = "Recording resumed! Continue speaking.";
    });
  })
  .catch((err) => {
    // If the user denies permission to record audio, then display an error.
    console.log("Error: " + err);
  });

var msec = 0;
var sec = 0;
var min = 0;
var intervalId;
var isPaused = false;

function formatTime(value) {
  return value < 10 ? "0" + value : value;
}

function clock() {
  msec += 1;
  if (msec == 60) {
    sec += 1;
    msec = 0;
    if (sec == 60) {
      sec = 0;
      min += 1;
    }
  }
  document.getElementById("timer").innerHTML =
    formatTime(min) + ":" + formatTime(sec) + ":" + formatTime(msec);
}

function startTimer() {
  if (isAudioPermissionGranted) {
    intervalId = setInterval(clock, 1000);
  } else {
    alert("Please grant audio permission!");
  }
}

function pauseTimer() {
  clearInterval(intervalId);
  document.getElementById("resume").style.display = "";
  document.getElementById("pause").style.display = "none";
}

function resumeTimer() {
  intervalId = setInterval(clock, 1000);
  document.getElementById("resume").style.display = "none";
  document.getElementById("pause").style.display = "";
}

function stopTimer() {
  clearInterval(intervalId);
}

function toggleTimer() {
  if (isPaused) {
    resumeTimer();
    isPaused = false;
  } else {
    pauseTimer();
    isPaused = true;
  }
}

function reset() {
  audioChunks = [];
  output.innerHTML = "";
  document.getElementById("timer").innerHTML = "00:00:00";
  document.getElementById("audio-container").style.display = "none";
  document.getElementById("new-recording").style.display = "none";
  startButton.style.display = "";
  msec =0, sec=0, min = 0;
}

function setRecording() {
  const blobObj = new Blob(audioChunks, { type: "audio/webm" });
  const audioUrl = URL.createObjectURL(blobObj);
  const audio = new Audio(audioUrl);
  audioPlayer.src = audio.src;
}

// enhancement
// function downloadAudio() {
// }
