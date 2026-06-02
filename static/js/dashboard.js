<<<<<<< HEAD
// =========================
// SIDEBAR TOGGLE
// =========================

const menuToggle =
document.getElementById("menuToggle");

const sidebar =
document.querySelector(".sidebar");

const mainContent =
document.querySelector(".main-content");

const navbar =
document.querySelector(".navbar");

const navLogo =
document.getElementById("navLogo");

menuToggle.addEventListener(
    "click",
    () => {

    sidebar.classList.toggle(
        "closed"
    );

    // Main content move
    mainContent.classList.toggle(
        "expanded"
    );

    // Navbar resize
    navbar.classList.toggle(
        "expanded"
    );
});


// =========================
// NAV LOGO CLICK
// Open sidebar again
// =========================

navLogo.addEventListener(
    "click",
    () => {

    sidebar.classList.remove(
        "closed"
    );

    mainContent.classList.remove(
        "expanded"
    );

    navbar.classList.remove(
        "expanded"
    );
});


// =========================
// SIDEBAR ACTIVE LINK
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
// CLEAR HISTORY BUTTON
// =========================

const clearBtn =
document.getElementById(
    "clearHistoryBtn"
);

if (clearBtn) {

    clearBtn.addEventListener(
        "click",
        () => {

        const confirmClear =
        confirm(
        "Are you sure you want to clear mood history?"
        );

        if (confirmClear) {

            const entries =
            document.querySelector(
                ".recent-entries"
            );

            if (entries) {

                // Delete all cards
                entries.innerHTML = "";

                // Show empty message
                const emptyMsg =
                document.createElement("p");

                emptyMsg.innerText =
                "No recent mood entries found.";

                emptyMsg.style.color =
                "#B9B8B8";

                emptyMsg.style.textAlign =
                "center";

                emptyMsg.style.marginTop =
                "40px";

                emptyMsg.style.fontFamily =
                "Lemonada";

                entries.appendChild(
                    emptyMsg
                );
            }
        }
    });
}


// =========================
// MOOD CARD HOVER EFFECT
// =========================

const moodItems =
document.querySelectorAll(
    ".mood-item"
);

moodItems.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

        card.style.transform =
        "translateY(-4px)";

        card.style.transition =
        "0.3s ease";

        card.style.borderColor =
        "#8B5CF6";

        card.style.boxShadow =
        "0 0 20px rgba(139,92,246,.2)";
    });

    card.addEventListener(
        "mouseleave",
        () => {

        card.style.transform =
        "translateY(0)";

        card.style.borderColor =
        "#3C3C3C";

        card.style.boxShadow =
        "none";
    });
});


// =========================
// ENTRY CARD HOVER EFFECT
// =========================

const entryCards =
document.querySelectorAll(
    ".entry-card"
);

entryCards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

        card.style.transform =
        "translateY(-5px)";

        card.style.transition =
        "0.3s ease";

        card.style.borderColor =
        "#8B5CF6";

        card.style.boxShadow =
        "0 0 20px rgba(139,92,246,.18)";
    });

    card.addEventListener(
        "mouseleave",
        () => {

        card.style.transform =
        "translateY(0)";

        card.style.borderColor =
        "#3C3C3C";

        card.style.boxShadow =
        "none";
    });
});


// =========================
// PAGE LOAD ANIMATION
// =========================

window.addEventListener(
    "load",
    () => {

    const cards =
    document.querySelectorAll(
        ".mood-item, .entry-card"
    );

    cards.forEach(
        (card, index) => {

        card.style.opacity =
        "0";

        card.style.transform =
        "translateY(20px)";

        setTimeout(() => {

            card.style.transition =
            "0.5s ease";

            card.style.opacity =
            "1";

            card.style.transform =
            "translateY(0)";

        }, index * 100);
    });
=======
// =========================
// SIDEBAR TOGGLE
// =========================

const menuToggle =
document.getElementById("menuToggle");

const sidebar =
document.querySelector(".sidebar");

const mainContent =
document.querySelector(".main-content");

const navbar =
document.querySelector(".navbar");

const navLogo =
document.getElementById("navLogo");

menuToggle.addEventListener(
    "click",
    () => {

    sidebar.classList.toggle(
        "closed"
    );

    // Main content move
    mainContent.classList.toggle(
        "expanded"
    );

    // Navbar resize
    navbar.classList.toggle(
        "expanded"
    );
});


// =========================
// NAV LOGO CLICK
// Open sidebar again
// =========================

navLogo.addEventListener(
    "click",
    () => {

    sidebar.classList.remove(
        "closed"
    );

    mainContent.classList.remove(
        "expanded"
    );

    navbar.classList.remove(
        "expanded"
    );
});


// =========================
// SIDEBAR ACTIVE LINK
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
// CLEAR HISTORY BUTTON
// =========================

const clearBtn =
document.getElementById(
    "clearHistoryBtn"
);

if (clearBtn) {

    clearBtn.addEventListener(
        "click",
        () => {

        const confirmClear =
        confirm(
        "Are you sure you want to clear mood history?"
        );

        if (confirmClear) {

            const entries =
            document.querySelector(
                ".recent-entries"
            );

            if (entries) {

                // Delete all cards
                entries.innerHTML = "";

                // Show empty message
                const emptyMsg =
                document.createElement("p");

                emptyMsg.innerText =
                "No recent mood entries found.";

                emptyMsg.style.color =
                "#B9B8B8";

                emptyMsg.style.textAlign =
                "center";

                emptyMsg.style.marginTop =
                "40px";

                emptyMsg.style.fontFamily =
                "Lemonada";

                entries.appendChild(
                    emptyMsg
                );
            }
        }
    });
}


// =========================
// MOOD CARD HOVER EFFECT
// =========================

const moodItems =
document.querySelectorAll(
    ".mood-item"
);

moodItems.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

        card.style.transform =
        "translateY(-4px)";

        card.style.transition =
        "0.3s ease";

        card.style.borderColor =
        "#8B5CF6";

        card.style.boxShadow =
        "0 0 20px rgba(139,92,246,.2)";
    });

    card.addEventListener(
        "mouseleave",
        () => {

        card.style.transform =
        "translateY(0)";

        card.style.borderColor =
        "#3C3C3C";

        card.style.boxShadow =
        "none";
    });
});


// =========================
// ENTRY CARD HOVER EFFECT
// =========================

const entryCards =
document.querySelectorAll(
    ".entry-card"
);

entryCards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

        card.style.transform =
        "translateY(-5px)";

        card.style.transition =
        "0.3s ease";

        card.style.borderColor =
        "#8B5CF6";

        card.style.boxShadow =
        "0 0 20px rgba(139,92,246,.18)";
    });

    card.addEventListener(
        "mouseleave",
        () => {

        card.style.transform =
        "translateY(0)";

        card.style.borderColor =
        "#3C3C3C";

        card.style.boxShadow =
        "none";
    });
});


// =========================
// PAGE LOAD ANIMATION
// =========================

window.addEventListener(
    "load",
    () => {

    const cards =
    document.querySelectorAll(
        ".mood-item, .entry-card"
    );

    cards.forEach(
        (card, index) => {

        card.style.opacity =
        "0";

        card.style.transform =
        "translateY(20px)";

        setTimeout(() => {

            card.style.transition =
            "0.5s ease";

            card.style.opacity =
            "1";

            card.style.transform =
            "translateY(0)";

        }, index * 100);
    });
>>>>>>> 236cf661cc88def0fa39c2dc0c47a7d964d8c411
});