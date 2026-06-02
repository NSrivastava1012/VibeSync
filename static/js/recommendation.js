// ==========================
// RE-ANALYZE BUTTON
// ==========================

function goBack() {
    window.location.href = "/moodanalyzer";
}


// ==========================
// MOOD CARD SWITCHING
// ==========================

const moodCards =
document.querySelectorAll(".mood-card");

moodCards.forEach(card => {

    card.addEventListener("click", () => {

        // Remove active state
        moodCards.forEach(c => {
            c.classList.remove("active-card");
        });

        // Add active to clicked card
        card.classList.add("active-card");

        // Get mood name
        const mood =
        card.querySelector("span")
        .innerText
        .trim()
        .toLowerCase();

        // Redirect to Flask route
        window.location.href =
        `/recommendation?mood=${mood}`;
    });
});


// ==========================
// SIDEBAR TOGGLE
// ==========================

const menuToggle =
document.querySelector(".menu-toggle");

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

    navbar.classList.add("expanded");

    mainContent.classList.add("expanded");
});


// OPEN SIDEBAR
navLogo.addEventListener("click", () => {

    sidebar.classList.remove("closed");

    navbar.classList.remove("expanded");

    mainContent.classList.remove("expanded");
});

function savePlaylist() {

    const mood =
    document.getElementById(
        "currentMood"
    ).value;

    const playlist =
    document.getElementById(
        "currentPlaylist"
    ).value;

    const moodEmoji = {

        happy: "☀️",
        sad: "🌧️",
        calm: "🌙",
        energetic: "⚡",
        focused: "🎯",
        romantic: "💖",
        melancholy: "🍂",
        angry: "🔥"
    };

    let favorites =
    JSON.parse(
        localStorage.getItem(
            "favorites"
        )
    ) || [];

    const exists =
    favorites.some(item =>
        item.playlist === playlist
    );

    if(!exists){

        favorites.push({

            mood: mood,

            emoji:
            moodEmoji[mood] || "🎵",

            playlist: playlist,

            savedAt:
            new Date().toLocaleDateString()

        });

        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );

        alert(
            "Playlist saved to Favorites!"
        );

    }else{

        alert(
            "Playlist already saved."
        );
    }
}