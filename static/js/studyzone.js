// ==========================
// SIDEBAR TOGGLE
// ==========================

const menuToggle =
document.getElementById("menuToggle");

const sidebar =
document.querySelector(".sidebar");

const navbar =
document.querySelector(".navbar");

const mainContent =
document.querySelector(".main-content");

const navLogo =
document.getElementById("navLogo");


// CLOSE SIDEBAR
menuToggle.addEventListener("click", () => {

    sidebar.classList.add("closed");

    navbar.style.left = "0";
    navbar.style.width = "100%";

    mainContent.style.marginLeft = "0";

    mainContent.style.transition =
    "0.4s ease";

    navbar.style.transition =
    "0.4s ease";
});


// OPEN SIDEBAR
navLogo.addEventListener("click", () => {

    sidebar.classList.remove("closed");

    navbar.style.left = "320px";

    navbar.style.width =
    "calc(100% - 320px)";

    mainContent.style.marginLeft =
    "320px";
});


// ==========================
// TIMER
// ==========================

const timerDisplay =
document.getElementById("timer");

const startBtn =
document.getElementById("startBtn");

const resetBtn =
document.getElementById("resetBtn");

const timeChips =
document.querySelectorAll(".time-chip");

let selectedMinutes = 25;

let timeLeft =
selectedMinutes * 60;

let timer;
let isRunning = false;


function updateTimerDisplay(){

    const minutes =
    Math.floor(timeLeft / 60);

    const seconds =
    timeLeft % 60;

    timerDisplay.textContent =
    `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
}


// START / PAUSE TIMER
startBtn.addEventListener("click", () => {

    if(!isRunning){

        isRunning = true;

        startBtn.innerHTML =
        `<i class="fa-solid fa-pause"></i> Pause`;

        timer = setInterval(() => {

            if(timeLeft > 0){

                timeLeft--;

                updateTimerDisplay();

            } else {

                clearInterval(timer);

                isRunning = false;

                startBtn.innerHTML =
                `<i class="fa-solid fa-play"></i> Start`;

                alert("🎉 Focus session completed!");
            }

        },1000);

    } else {

        clearInterval(timer);

        isRunning = false;

        startBtn.innerHTML =
        `<i class="fa-solid fa-play"></i> Start`;
    }
});


// RESET TIMER
resetBtn.addEventListener("click", () => {

    clearInterval(timer);

    isRunning = false;

    timeLeft =
    selectedMinutes * 60;

    updateTimerDisplay();

    startBtn.innerHTML =
    `<i class="fa-solid fa-play"></i> Start`;
});


// TIME CHIPS
timeChips.forEach(chip => {

    chip.addEventListener("click", () => {

        timeChips.forEach(c =>
            c.classList.remove("active")
        );

        chip.classList.add("active");

        selectedMinutes =
        parseInt(chip.dataset.time);

        clearInterval(timer);

        isRunning = false;

        timeLeft =
        selectedMinutes * 60;

        updateTimerDisplay();

        startBtn.innerHTML =
        `<i class="fa-solid fa-play"></i> Start`;
    });
});


// ==========================
// PLAYLIST SWITCHING
// ==========================

const playlistCards =
document.querySelectorAll(".playlist-card");

const spotifyFrame =
document.getElementById("spotifyFrame");

playlistCards.forEach(card => {

    card.addEventListener("click", () => {

        // Remove active class
        playlistCards.forEach(c => {
            c.classList.remove(
                "active-playlist"
            );
        });

        // Add active class
        card.classList.add(
            "active-playlist"
        );

        // Change playlist
        const playlistUrl =
        card.dataset.playlist;

        spotifyFrame.src =
        playlistUrl;
    });
});


// INITIAL TIMER
updateTimerDisplay();