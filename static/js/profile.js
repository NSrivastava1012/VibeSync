<<<<<<< HEAD
// =========================
// SELECT ELEMENTS
// =========================

const sidebar =
document.querySelector(".sidebar");

const navbar =
document.querySelector(".navbar");

const mainContent =
document.querySelector(".main-content");

const menuToggle =
document.querySelector(".menu-toggle");

const navLogo =
document.querySelector(".nav-logo");


// =========================
// SIDEBAR CLOSE
// =========================

if(menuToggle){

    menuToggle.addEventListener(
        "click",
        () => {

            sidebar.classList.add(
                "closed"
            );

            navbar.classList.add(
                "full"
            );

            mainContent.classList.add(
                "full"
            );
        }
    );
}


// =========================
// NAVBAR LOGO REOPEN SIDEBAR
// =========================

if(navLogo){

    navLogo.addEventListener(
        "click",
        () => {

            sidebar.classList.remove(
                "closed"
            );

            navbar.classList.remove(
                "full"
            );

            mainContent.classList.remove(
                "full"
            );
        }
    );
}


// =========================
// ACTIVE MENU LINK
// =========================

const menuLinks =
document.querySelectorAll(".menu a");

menuLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            menuLinks.forEach(item => {

                item.classList.remove(
                    "active"
                );
            });

            link.classList.add(
                "active"
            );
        }
    );
});


// =========================
// GENRE SELECTION
// =========================

const genres =
document.querySelectorAll(".genre");

const selectedGenreInput =
document.getElementById(
    "selectedGenre"
);

genres.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            genres.forEach(item => {

                item.classList.remove(
                    "active"
                );
            });

            button.classList.add(
                "active"
            );

            if(selectedGenreInput){

                selectedGenreInput.value =
                button.dataset.genre;
            }
        }
    );
});


// =========================
// SAVE PREFERENCES
// =========================

const saveBtn =
document.getElementById(
    "savePreferencesBtn"
);

if(saveBtn){

    saveBtn.addEventListener(
        "click",
        async () => {

            const displayName =
            document.getElementById(
                "displayName"
            ).value.trim();

            const genre =
            document.getElementById(
                "selectedGenre"
            ).value;

            const reduceMotion =
            document.getElementById(
                "reduceMotion"
            ).checked;

            const formData =
            new FormData();

            formData.append(
                "display_name",
                displayName
            );

            formData.append(
                "genre",
                genre
            );

            formData.append(
                "reduce_motion",
                reduceMotion
            );

            try{

                const response =
                await fetch(
                    saveProfileUrl,
                    {
                        method: "POST",
                        body: formData
                    }
                );

                const text = await response.text();

                console.log(text);

                const data = JSON.parse(text);

                if(data.success){

                    alert(
                        "Preferences saved successfully!"
                    );

                    location.reload();
                }

            }catch(error){

                console.error(error);

                alert(
                    "Failed to save preferences."
                );
            }
        }
    );
}


// =========================
// PAGE LOAD ANIMATION
// =========================

window.addEventListener(
    "load",
    () => {

        const profileCard =
        document.querySelector(
            ".profile-card"
        );

        if(profileCard){

            profileCard.style.opacity =
            "0";

            profileCard.style.transform =
            "translateY(30px)";

            setTimeout(() => {

                profileCard.style.transition =
                "all 0.6s ease";

                profileCard.style.opacity =
                "1";

                profileCard.style.transform =
                "translateY(0)";

            }, 200);
        }
    }
=======
// =========================
// SELECT ELEMENTS
// =========================

const sidebar =
document.querySelector(".sidebar");

const navbar =
document.querySelector(".navbar");

const mainContent =
document.querySelector(".main-content");

const menuToggle =
document.querySelector(".menu-toggle");

const navLogo =
document.querySelector(".nav-logo");


// =========================
// SIDEBAR CLOSE
// =========================

if(menuToggle){

    menuToggle.addEventListener(
        "click",
        () => {

            sidebar.classList.add(
                "closed"
            );

            navbar.classList.add(
                "full"
            );

            mainContent.classList.add(
                "full"
            );
        }
    );
}


// =========================
// NAVBAR LOGO REOPEN SIDEBAR
// =========================

if(navLogo){

    navLogo.addEventListener(
        "click",
        () => {

            sidebar.classList.remove(
                "closed"
            );

            navbar.classList.remove(
                "full"
            );

            mainContent.classList.remove(
                "full"
            );
        }
    );
}


// =========================
// ACTIVE MENU LINK
// =========================

const menuLinks =
document.querySelectorAll(".menu a");

menuLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            menuLinks.forEach(item => {

                item.classList.remove(
                    "active"
                );
            });

            link.classList.add(
                "active"
            );
        }
    );
});


// =========================
// GENRE SELECTION
// =========================

const genres =
document.querySelectorAll(".genre");

const selectedGenreInput =
document.getElementById(
    "selectedGenre"
);

genres.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            genres.forEach(item => {

                item.classList.remove(
                    "active"
                );
            });

            button.classList.add(
                "active"
            );

            if(selectedGenreInput){

                selectedGenreInput.value =
                button.dataset.genre;
            }
        }
    );
});


// =========================
// SAVE PREFERENCES
// =========================

const saveBtn =
document.getElementById(
    "savePreferencesBtn"
);

if(saveBtn){

    saveBtn.addEventListener(
        "click",
        async () => {

            const displayName =
            document.getElementById(
                "displayName"
            ).value.trim();

            const genre =
            document.getElementById(
                "selectedGenre"
            ).value;

            const reduceMotion =
            document.getElementById(
                "reduceMotion"
            ).checked;

            const formData =
            new FormData();

            formData.append(
                "display_name",
                displayName
            );

            formData.append(
                "genre",
                genre
            );

            formData.append(
                "reduce_motion",
                reduceMotion
            );

            try{

                const response =
                await fetch(
                    saveProfileUrl,
                    {
                        method: "POST",
                        body: formData
                    }
                );

                const text = await response.text();

                console.log(text);

                const data = JSON.parse(text);

                if(data.success){

                    alert(
                        "Preferences saved successfully!"
                    );

                    location.reload();
                }

            }catch(error){

                console.error(error);

                alert(
                    "Failed to save preferences."
                );
            }
        }
    );
}


// =========================
// PAGE LOAD ANIMATION
// =========================

window.addEventListener(
    "load",
    () => {

        const profileCard =
        document.querySelector(
            ".profile-card"
        );

        if(profileCard){

            profileCard.style.opacity =
            "0";

            profileCard.style.transform =
            "translateY(30px)";

            setTimeout(() => {

                profileCard.style.transition =
                "all 0.6s ease";

                profileCard.style.opacity =
                "1";

                profileCard.style.transform =
                "translateY(0)";

            }, 200);
        }
    }
>>>>>>> 236cf661cc88def0fa39c2dc0c47a7d964d8c411
);