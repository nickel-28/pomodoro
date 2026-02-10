let time = 25 * 60;
let timerInterval = null;
let isRunning = false;

const timerDisplay = document.getElementById("timer");
const startPauseBtn = document.getElementById("startPause");
const resetBtn = document.getElementById("reset");
const timeSelect = document.getElementById("timeSelect");
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

/* ---------- TIMER FUNCTIONS ---------- */

function updateDisplay() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerDisplay.textContent =
    `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function startTimer() {
  timerInterval = setInterval(() => {
    if (time > 0) {
      time--;
      updateDisplay();
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      isRunning = false;
      startPauseBtn.textContent = "Start";
      alert("Pomodoro Complete 🎉");
    }
  }, 1000);
}

/* ---------- START / PAUSE ---------- */

startPauseBtn.addEventListener("click", () => {
  if (!isRunning) {
    startTimer();
    isRunning = true;
    startPauseBtn.textContent = "Pause";
  } else {
    clearInterval(timerInterval);
    timerInterval = null;
    isRunning = false;
    startPauseBtn.textContent = "Resume";
  }
});

/* ---------- RESET ---------- */

resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  isRunning = false;

  time = timeSelect.value * 60;
  startPauseBtn.textContent = "Start";
  updateDisplay();
});

/* ---------- CUSTOM TIME ---------- */

timeSelect.addEventListener("change", () => {
  time = timeSelect.value * 60;
  clearInterval(timerInterval);
  timerInterval = null;
  isRunning = false;
  startPauseBtn.textContent = "Start";
  updateDisplay();
});

/* ---------- DARK MODE ---------- */

themeToggle.addEventListener("change", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
});

/* ---------- INIT ---------- */

updateDisplay();
