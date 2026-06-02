<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {

    const menuLinks = document.querySelectorAll(".menu a");

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {

            menuLinks.forEach(item =>
                item.classList.remove("active")
            );

            this.classList.add("active");
        });
    });

    const moodBtn = document.querySelector(
        ".buttons button:first-child"
    );

    const studyBtn = document.querySelector(
        ".buttons button:last-child"
    );

    // Flask route later
    moodBtn.addEventListener("click", () => {
        window.location.href = "/mood-analyzer";
    });

    studyBtn.addEventListener("click", () => {
        window.location.href = "/studyzone";
    });

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transform =
                "translateY(-8px) scale(1.02)";

            card.style.transition =
                "0.3s ease";

            card.style.boxShadow =
                "0 0 30px rgba(139,92,246,0.35)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform =
                "translateY(0) scale(1)";

            card.style.boxShadow = "none";
        });
    });

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";
                }
            });

        },
        {
            threshold: 0.2
        }
    );

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform =
            "translateY(40px)";
        card.style.transition =
            "all 0.7s ease";

        observer.observe(card);
    });

    const heading = document.querySelector(".hero h1");

    const text =
        "Where your mood meets the perfect melody";

    let index = 0;

    heading.innerHTML = "";

    function typeText() {

        if (index < text.length) {

            heading.innerHTML +=
                text.charAt(index);

            index++;

            setTimeout(typeText, 40);
        }
    }

    typeText();

});

// ===========================
// Sidebar Toggle
// ===========================

const menuToggle =
document.getElementById("menuToggle");

const sidebar =
document.querySelector(".sidebar");

const main =
document.querySelector(".main");

menuToggle.addEventListener("click", () => {

    sidebar.classList.toggle("closed");

    main.classList.toggle("expanded");

});

// ===========================
// Reopen Sidebar from Navbar Logo
// ===========================

const navLogo =
document.getElementById("navLogo");

navLogo.addEventListener("click", () => {

    sidebar.classList.remove("closed");

    main.classList.remove("expanded");

=======
document.addEventListener("DOMContentLoaded", () => {

    const menuLinks = document.querySelectorAll(".menu a");

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {

            menuLinks.forEach(item =>
                item.classList.remove("active")
            );

            this.classList.add("active");
        });
    });

    const moodBtn = document.querySelector(
        ".buttons button:first-child"
    );

    const studyBtn = document.querySelector(
        ".buttons button:last-child"
    );

    // Flask route later
    moodBtn.addEventListener("click", () => {
        window.location.href = "/mood-analyzer";
    });

    studyBtn.addEventListener("click", () => {
        window.location.href = "/studyzone";
    });

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transform =
                "translateY(-8px) scale(1.02)";

            card.style.transition =
                "0.3s ease";

            card.style.boxShadow =
                "0 0 30px rgba(139,92,246,0.35)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform =
                "translateY(0) scale(1)";

            card.style.boxShadow = "none";
        });
    });

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";
                }
            });

        },
        {
            threshold: 0.2
        }
    );

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform =
            "translateY(40px)";
        card.style.transition =
            "all 0.7s ease";

        observer.observe(card);
    });

    const heading = document.querySelector(".hero h1");

    const text =
        "Where your mood meets the perfect melody";

    let index = 0;

    heading.innerHTML = "";

    function typeText() {

        if (index < text.length) {

            heading.innerHTML +=
                text.charAt(index);

            index++;

            setTimeout(typeText, 40);
        }
    }

    typeText();

});

// ===========================
// Sidebar Toggle
// ===========================

const menuToggle =
document.getElementById("menuToggle");

const sidebar =
document.querySelector(".sidebar");

const main =
document.querySelector(".main");

menuToggle.addEventListener("click", () => {

    sidebar.classList.toggle("closed");

    main.classList.toggle("expanded");

});

// ===========================
// Reopen Sidebar from Navbar Logo
// ===========================

const navLogo =
document.getElementById("navLogo");

navLogo.addEventListener("click", () => {

    sidebar.classList.remove("closed");

    main.classList.remove("expanded");

>>>>>>> 236cf661cc88def0fa39c2dc0c47a7d964d8c411
});