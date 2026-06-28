// ===== Typing Animation =====

const words = [
    "Python Developer 🐍",
    "Frontend Developer 💻",
    "Web Designer 🎨",
    "Formula 1 Fan 🏎️"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function type() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === current.length) {
            deleting = true;
            setTimeout(type, 1500);
            return;
        }

    } else {

        typing.textContent = current.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(type, deleting ? 60 : 120);
}

type();


// ===== Navbar Shadow =====

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 30) {

        navbar.style.boxShadow = "0 8px 30px rgba(255,0,0,.25)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


// ===== Button Click Effect =====

const buttons = document.querySelectorAll(".buttons a");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});