// =========================
// SIDEBAR TOGGLE
// =========================

const sidebar =
document.querySelector(".sidebar");

const navbar =
document.querySelector(".navbar");

const main =
document.querySelector(".main");

const menuToggle =
document.getElementById("menuToggle");

const navLogo =
document.getElementById("navLogo");


// CLOSE SIDEBAR
menuToggle.addEventListener("click", () => {

    sidebar.classList.add("closed");

    navbar.classList.add("full");

    main.classList.add("expanded");
});


// REOPEN SIDEBAR
navLogo.addEventListener("click", () => {

    sidebar.classList.remove("closed");

    navbar.classList.remove("full");

    main.classList.remove("expanded");
});


// =========================
// SIDEBAR ACTIVE MENU
// =========================

const menuLinks =
document.querySelectorAll(".menu a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});


// =========================
// CHARACTER COUNT
// =========================

const moodInput =
document.getElementById("moodInput");

const charCount =
document.getElementById("charCount");

moodInput.addEventListener("input", () => {

    charCount.innerText =
    `${moodInput.value.length}/2000`;
});


// =========================
// CHIP BUTTONS
// =========================

const chips =
document.querySelectorAll(".chip");

chips.forEach(chip => {

    chip.addEventListener("click", () => {

        moodInput.value =
        chip.innerText.trim();

        charCount.innerText =
        `${moodInput.value.length}/2000`;

        moodInput.focus();
    });
});


// =========================
// PAGE LOAD ANIMATION
// =========================

window.addEventListener("load", () => {

    const moodBox =
    document.querySelector(".mood-box");

    if(!moodBox) return;

    moodBox.style.opacity =
    "0";

    moodBox.style.transform =
    "translateY(30px)";

    setTimeout(() => {

        moodBox.style.transition =
        "0.6s ease";

        moodBox.style.opacity =
        "1";

        moodBox.style.transform =
        "translateY(0)";

    }, 200);
});