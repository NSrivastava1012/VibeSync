<<<<<<< HEAD
// =========================
// ELEMENTS
// =========================

const menuToggle =
document.querySelector(".menu-toggle");

const sidebar =
document.querySelector(".sidebar");

const navbar =
document.querySelector(".navbar");

const mainContent =
document.querySelector(".main-content");

const navLogo =
document.querySelector(".nav-logo");


// =========================
// CLOSE / OPEN SIDEBAR
// =========================

function toggleSidebar() {

    sidebar.classList.toggle("closed");

    if (sidebar.classList.contains("closed")) {

        navbar.style.left = "0";
        navbar.style.width = "100%";

        mainContent.style.marginLeft = "0";

    } else {

        navbar.style.left = "320px";
        navbar.style.width =
        "calc(100% - 320px)";

        mainContent.style.marginLeft =
        "320px";
    }
}


// =========================
// MENU BUTTON CLICK
// =========================

if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        toggleSidebar
    );
}


// =========================
// NAVBAR LOGO CLICK
// REOPEN SIDEBAR
// =========================

if (navLogo) {

    navLogo.addEventListener("click", () => {

        if (
            sidebar.classList.contains(
                "closed"
            )
        ) {

            sidebar.classList.remove(
                "closed"
            );

            navbar.style.left =
            "320px";

            navbar.style.width =
            "calc(100% - 320px)";

            mainContent.style.marginLeft =
            "320px";
        }
    });
}


// =========================
// SIDEBAR ACTIVE LINK
// =========================

const menuLinks =
document.querySelectorAll(".menu a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuLinks.forEach(item => {
            item.classList.remove(
                "active"
            );
        });

        link.classList.add("active");
    });
});


// =========================
// BROWSE PLAYLIST BUTTON
// =========================

const browseBtn =
document.getElementById("browsePlaylistBtn");

if (browseBtn) {

    browseBtn.addEventListener("click", () => {
        window.location.href =
        "/recommendation";
    });
}


// =========================
// PAGE LOAD ANIMATION
// =========================

window.addEventListener(
    "load",
    () => {

    const content =
    document.querySelector(
        ".favorites-container"
    );

    if(content){

        content.style.opacity = "0";

        content.style.transform =
        "translateY(20px)";

        setTimeout(() => {

            content.style.transition =
            "0.5s ease";

            content.style.opacity = "1";

            content.style.transform =
            "translateY(0)";

        }, 200);
    }
});

// =========================
// LOAD SAVED PLAYLISTS
// =========================

const favoritesContainer =
document.getElementById(
    "favoritesContainer"
);

const emptyState =
document.getElementById(
    "emptyState"
);

if (favoritesContainer) {

    const favorites =
    JSON.parse(
        localStorage.getItem(
            "favorites"
        )
    ) || [];

    if (favorites.length > 0) {

        emptyState.style.display =
        "none";

        favoritesContainer.innerHTML = "";

        favorites.forEach((item, index) => {

            favoritesContainer.innerHTML += `

            <div class="favorite-card">

                <div class="favorite-header">

                    <div>

                        <span class="mood-badge">
                            ${item.emoji || "🎵"}
                            ${item.mood || "Playlist"}
                        </span>

                        <p class="saved-date">
                            Saved Playlist
                        </p>

                    </div>

                    <button
                    class="remove-btn"
                    onclick="removePlaylist(${index})">

                        <i class="fa-solid fa-trash"></i>

                    </button>

                </div>

                <div class="playlist-frame">

                    <iframe
                        src="${item.playlist}"
                        width="100%"
                        height="352"
                        frameborder="0"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                    </iframe>

                </div>

            </div>

            `;
        });

    } else {

        emptyState.style.display =
        "flex";
    }
}


// =========================
// REMOVE PLAYLIST
// =========================

function removePlaylist(index){

    let favorites =
    JSON.parse(
        localStorage.getItem(
            "favorites"
        )
    ) || [];

    favorites.splice(index, 1);

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    location.reload();
=======
// =========================
// ELEMENTS
// =========================

const menuToggle =
document.querySelector(".menu-toggle");

const sidebar =
document.querySelector(".sidebar");

const navbar =
document.querySelector(".navbar");

const mainContent =
document.querySelector(".main-content");

const navLogo =
document.querySelector(".nav-logo");


// =========================
// CLOSE / OPEN SIDEBAR
// =========================

function toggleSidebar() {

    sidebar.classList.toggle("closed");

    if (sidebar.classList.contains("closed")) {

        navbar.style.left = "0";
        navbar.style.width = "100%";

        mainContent.style.marginLeft = "0";

    } else {

        navbar.style.left = "320px";
        navbar.style.width =
        "calc(100% - 320px)";

        mainContent.style.marginLeft =
        "320px";
    }
}


// =========================
// MENU BUTTON CLICK
// =========================

if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        toggleSidebar
    );
}


// =========================
// NAVBAR LOGO CLICK
// REOPEN SIDEBAR
// =========================

if (navLogo) {

    navLogo.addEventListener("click", () => {

        if (
            sidebar.classList.contains(
                "closed"
            )
        ) {

            sidebar.classList.remove(
                "closed"
            );

            navbar.style.left =
            "320px";

            navbar.style.width =
            "calc(100% - 320px)";

            mainContent.style.marginLeft =
            "320px";
        }
    });
}


// =========================
// SIDEBAR ACTIVE LINK
// =========================

const menuLinks =
document.querySelectorAll(".menu a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuLinks.forEach(item => {
            item.classList.remove(
                "active"
            );
        });

        link.classList.add("active");
    });
});


// =========================
// BROWSE PLAYLIST BUTTON
// =========================

const browseBtn =
document.getElementById("browsePlaylistBtn");

if (browseBtn) {

    browseBtn.addEventListener("click", () => {
        window.location.href =
        "/recommendation";
    });
}


// =========================
// PAGE LOAD ANIMATION
// =========================

window.addEventListener(
    "load",
    () => {

    const content =
    document.querySelector(
        ".favorites-container"
    );

    if(content){

        content.style.opacity = "0";

        content.style.transform =
        "translateY(20px)";

        setTimeout(() => {

            content.style.transition =
            "0.5s ease";

            content.style.opacity = "1";

            content.style.transform =
            "translateY(0)";

        }, 200);
    }
});

// =========================
// LOAD SAVED PLAYLISTS
// =========================

const favoritesContainer =
document.getElementById(
    "favoritesContainer"
);

const emptyState =
document.getElementById(
    "emptyState"
);

if (favoritesContainer) {

    const favorites =
    JSON.parse(
        localStorage.getItem(
            "favorites"
        )
    ) || [];

    if (favorites.length > 0) {

        emptyState.style.display =
        "none";

        favoritesContainer.innerHTML = "";

        favorites.forEach((item, index) => {

            favoritesContainer.innerHTML += `

            <div class="favorite-card">

                <div class="favorite-header">

                    <div>

                        <span class="mood-badge">
                            ${item.emoji || "🎵"}
                            ${item.mood || "Playlist"}
                        </span>

                        <p class="saved-date">
                            Saved Playlist
                        </p>

                    </div>

                    <button
                    class="remove-btn"
                    onclick="removePlaylist(${index})">

                        <i class="fa-solid fa-trash"></i>

                    </button>

                </div>

                <div class="playlist-frame">

                    <iframe
                        src="${item.playlist}"
                        width="100%"
                        height="352"
                        frameborder="0"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                    </iframe>

                </div>

            </div>

            `;
        });

    } else {

        emptyState.style.display =
        "flex";
    }
}


// =========================
// REMOVE PLAYLIST
// =========================

function removePlaylist(index){

    let favorites =
    JSON.parse(
        localStorage.getItem(
            "favorites"
        )
    ) || [];

    favorites.splice(index, 1);

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    location.reload();
>>>>>>> 236cf661cc88def0fa39c2dc0c47a7d964d8c411
}