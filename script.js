/* ===========================
   SUMMERTIME - SCRIPT.JS
=========================== */

// Navbar che cambia durante lo scroll

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(30,79,122,0.95)";
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,.15)";

    } else {

        header.style.background = "transparent";
        header.style.boxShadow = "none";

    }

});

// Scroll fluido per i link del menu

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {

    link.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// Animazioni delle sezioni durante lo scroll

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// Pulsante Torna Su

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.id = "backToTop";

document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.bottom = "25px";
backToTop.style.right = "25px";
backToTop.style.width = "50px";
backToTop.style.height = "50px";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.background = "#2F6FA5";
backToTop.style.color = "#fff";
backToTop.style.fontSize = "22px";
backToTop.style.cursor = "pointer";
backToTop.style.boxShadow = "0 6px 18px rgba(0,0,0,.25)";
backToTop.style.display = "none";
backToTop.style.transition = "0.3s";
backToTop.style.zIndex = "9999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("mouseenter", () => {

    backToTop.style.transform = "scale(1.1)";
    backToTop.style.background = "#1E4F7A";

});

backToTop.addEventListener("mouseleave", () => {

    backToTop.style.transform = "scale(1)";
    backToTop.style.background = "#2F6FA5";

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// Animazione iniziale Hero

window.addEventListener("load", () => {

    const hero = document.querySelector(".hero-content");

    if (hero) {

        hero.style.opacity = "0";
        hero.style.transform = "translateY(40px)";

        setTimeout(() => {

            hero.style.transition = "1s";
            hero.style.opacity = "1";
            hero.style.transform = "translateY(0)";

        }, 300);

    }

});
