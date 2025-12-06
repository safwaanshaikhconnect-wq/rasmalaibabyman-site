// === SIMPLE PASSWORD ===
const CORRECT_PASSWORD = "rasmalai"; // change this to whatever you want

const lockScreen = document.getElementById("lock-screen");
const mainContent = document.getElementById("main-content");
const passwordInput = document.getElementById("password-input");
const enterBtn = document.getElementById("enter-btn");
const errorMsg = document.getElementById("error-msg");

function tryUnlock() {
    if (passwordInput.value === CORRECT_PASSWORD) {
        lockScreen.style.display = "none";
        mainContent.classList.remove("hidden");
        // startMusic(); // will define later
    } else {
        errorMsg.textContent = "Wrong password, try again ❤️";
    }
}

enterBtn.addEventListener("click", tryUnlock);
passwordInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") tryUnlock();
});

// === DAYS TOGETHER COUNTER ===
// Your start date: 06.10.25 (assuming 6 Oct 2025, adjust if needed)
const startDate = new Date(2025, 9, 6); // month is 0-based: 9 = October
const daysCounterEl = document.getElementById("days-counter");

function updateDaysTogether() {
    const today = new Date();
    const diffMs = today - startDate;
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (daysCounterEl) {
        daysCounterEl.textContent = days;
    }
}

updateDaysTogether();
