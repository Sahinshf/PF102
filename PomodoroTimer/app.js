const timeDisplay = document.querySelector(".time");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
const messageDisplay = document.querySelector(".message");

let remainingTime = 1 * 60;
let isRunning = false;
let intervalId = null;

function uploadTimerDisplay(remainingTime) {
  let time =
    Math.floor(remainingTime / 60)
      .toString()
      .padStart(2, "0") +
    ":" +
    (remainingTime % 60).toString().padStart(2, "0");

  timeDisplay.textContent = time;
}

function startTimer() {
  // Timer işləmirsə
  if (!isRunning) {
    isRunning = true; // Timer artıq işləyir

    intervalId = setInterval(() => {
      if (remainingTime > 0) {
        remainingTime--;
        uploadTimerDisplay(remainingTime);
      } else {
        clearInterval(intervalId);
        messageDisplay.textContent = " Please take a break ";
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(intervalId);
  isRunning = false;
}

function resetTimer() {
  clearInterval(intervalId);
  isRunning = false;

  remainingTime = 1 * 60;
  messageDisplay.textContent = "";

  uploadTimerDisplay(remainingTime);
}

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
reset.addEventListener("click", resetTimer);
