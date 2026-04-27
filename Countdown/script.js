let timer = null;
let valueInSecond = 0;
let isRunning = false;

const startButton = document.getElementById("startButton");
const toggleButton = document.getElementById("toggleButton");
const timeInput = document.getElementById("timeInput");
const countdownDisplay = document.getElementById("countdownDisplay");

startButton.addEventListener("click", startTimer);
toggleButton.addEventListener("click", toggleTimer);

function startTimer() {
  if (timer) return; // already running

  valueInSecond = parseInt(timeInput.value);

  if (isNaN(valueInSecond)) {
    countdownDisplay.innerText = "Please enter a valid number";
    return;
  }

  if (valueInSecond <= 0) {
    countdownDisplay.innerText = "Please enter seconds > 0";
    return;
  }

  runTimer();
}

function runTimer() {
  timer = setInterval(function () {
    valueInSecond--;
    countdownDisplay.innerText = `Time remaining: ${valueInSecond} seconds`;

    if (valueInSecond <= 0) {
      clearInterval(timer);
      timer = null;
      isRunning = false;
      toggleButton.innerText = "Resume";
      countdownDisplay.innerText = "Time up ⏱️";
    }
  }, 1000);

  isRunning = true;
  toggleButton.innerText = "Pause";
}

// TOGGLE (Pause / Resume)
function toggleTimer() {
  if (isRunning) {
    // Pause
    clearInterval(timer);
    timer = null;
    isRunning = false;
    toggleButton.innerText = "Resume";
  } else {
    // Resume
    if (valueInSecond > 0) {
      runTimer();
    }
  }
}
