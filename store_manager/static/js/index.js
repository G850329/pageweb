// ================================  LOADER  ====================================== //

setTimeout(() => {
    const loader = document.querySelector(".loader");
    loader.style.opacity = "0";
    loader.style.backgroundColor = "transparent";
    setTimeout(() => {
        loader.style.display = "none";
        document.body.style.overflow = "visible";
    }, 1000);
}, 3000);

// =======================================  NAVIGATE ====================================== //

const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const bgOverlay = document.querySelector(".overlay");

if (burgerMenu && bgOverlay) {
    burgerMenu.addEventListener("click", () => {
        navbarMenu.classList.add("is-active");
        bgOverlay.classList.toggle("is-active");
    });

    bgOverlay.addEventListener("click", () => {
        navbarMenu.classList.remove("is-active");
        bgOverlay.classList.toggle("is-active");
    });
}

// close on click
document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", () => {
        navbarMenu.classList.remove("is-active");
        bgOverlay.classList.remove("is-active");
    });
});

// search toggle
const searchBlock = document.querySelector(".search-block");
const searchToggle = document.querySelector(".search-toggle");
const searchCancel = document.querySelector(".search-cancel");

if (searchToggle && searchCancel) {
    searchToggle.addEventListener("click", () => {
        searchBlock.classList.add("is-active");
    });

    searchCancel.addEventListener("click", () => {
        searchBlock.classList.remove("is-active");
    });
}

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.height = "4.5rem";
        header.style.backgroundColor = "hsla(240, 15%, 10%, .5)";
        header.style.backdropFilter = "blur(20px)";
        header.style.borderBottomColor = "hsla(240, 10%, 80%, .2)";
    } else {
        header.style.height = "8rem";
        header.style.backgroundColor = "hsla(240, 8%, 8%, 0)";
        header.style.backdropFilter = "blur(0px)";
        header.style.borderBottomColor = "hsla(240, 15%, 12%, 0)";
    }
});



// ==============================  HERO SPARKLE TEXT  ============================= //

let index = 0,
    interval = 1000;
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const animate = (star) => {
    star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
    star.style.setProperty("--star-top", `${rand(-40, 80)}%`);
    star.style.animation = "none";
    star.offsetHeight;
    star.style.animation = "";
};
for (const star of document.getElementsByClassName("magic-star")) {
    setTimeout(() => {
        animate(star);
        setInterval(() => animate(star), 1000);
    }, index++ * (interval / 3));
}
