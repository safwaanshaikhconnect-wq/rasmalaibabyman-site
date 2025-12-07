// === SIMPLE PASSWORD ===
const CORRECT_PASSWORD = "mwah"; // change this to whatever you want

const lockScreen = document.getElementById("lock-screen");
const lovePopup = document.getElementById("love-popup");
const mainContent = document.getElementById("main-content");
const passwordInput = document.getElementById("password-input");
const enterBtn = document.getElementById("enter-btn");
const errorMsg = document.getElementById("error-msg");

const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

// === CHECK LOGIN STATE ===
if (sessionStorage.getItem("isLoggedIn") === "true") {
    lockScreen.style.display = "none";
    lovePopup.classList.add("hidden");
    mainContent.classList.remove("hidden");
}

function tryUnlock() {
    if (passwordInput.value === CORRECT_PASSWORD) {
        lockScreen.style.display = "none";
        // removed direct mainContent show
        lovePopup.classList.remove("hidden"); // Show the question
    } else {
        errorMsg.textContent = "Wrong password, try again ❤️";
    }
}

enterBtn.addEventListener("click", tryUnlock);
passwordInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") tryUnlock();
});

// === LOVE QUESTION LOGIC ===
yesBtn.addEventListener("click", () => {
    lovePopup.style.display = "none";
    mainContent.classList.remove("hidden");
    sessionStorage.setItem("isLoggedIn", "true"); // Save state only for this session
    // startMusic(); // will define later
});

function moveNoButton(e) {
    if (e) e.preventDefault(); // Prevent default click on touch devices to stop it from actually being 'clicked'

    // Ensure it doesn't go off screen
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const x = Math.random() * Math.max(0, maxX);
    const y = Math.random() * Math.max(0, maxY);

    noBtn.style.position = "fixed";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

// === DAYS TOGETHER COUNTER ===
// Start date: 06.10.25 at 9:39 PM
const startDate = new Date(2025, 9, 6, 21, 39); // Month is 0-based (9=Oct), 21:39 = 9:39 PM

const daysCounterEl = document.getElementById("days-counter");

function updateDaysTogether() {
    const today = new Date();
    const diffMs = today - startDate;

    if (diffMs > 0) {
        const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

        if (daysCounterEl) {
            daysCounterEl.textContent = `${days}d : ${hours}h : ${minutes}m`;
        }
    } else {
        if (daysCounterEl) daysCounterEl.textContent = "See you soon!";
    }
}

updateDaysTogether();
setInterval(updateDaysTogether, 60000); // Update every minute
