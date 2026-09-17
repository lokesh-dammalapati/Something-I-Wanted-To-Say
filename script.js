const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");


/* =========================
   SCREEN CHANGE
========================= */

function nextScreen(number) {

    const current = document.querySelector(".screen.active");
    const next = document.getElementById("screen" + number);

    if (!next) return;

    createHearts(20);
    createSparkles();

    if (current) {
        current.classList.remove("active");
    }

    setTimeout(function () {

        next.classList.add("active");

        startTyping(next);

    }, 200);

    startMusic();
}


/* =========================
   MUSIC
========================= */

function startMusic() {

    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");

    if (!music) {
        console.log("Music file not found");
        return;
    }

    music.volume = 0.5;

    music.play()
        .then(function () {

            console.log("Music started");

            if (musicBtn) {
                musicBtn.textContent = "🔊";
            }

        })
        .catch(function (error) {

            console.log("Music error:", error);

        });
}


function toggleMusic() {

    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");

    if (!music) return;

    if (music.paused) {

        music.play();

        if (musicBtn) {
            musicBtn.textContent = "🔊";
        }

    } else {

        music.pause();

        if (musicBtn) {
            musicBtn.textContent = "🔇";
        }
    }
}


function toggleMusic() {

    if (!music) return;

    if (music.paused) {

        music.volume = 0.35;

        music.play();

        if (musicBtn) {
            musicBtn.textContent = "🔊";
        }

    } else {

        music.pause();

        if (musicBtn) {
            musicBtn.textContent = "🔇";
        }
    }
}


/* =========================
   FALLING HEARTS
========================= */

function createHearts(amount) {

    const hearts = [
        "❤️",
        "💗",
        "💖",
        "💕",
        "💘"
    ];

    for (let i = 0; i < amount; i++) {

        const heart = document.createElement("div");

        heart.className = "falling-heart";

        heart.textContent =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            15 + Math.random() * 25 + "px";

        heart.style.animationDuration =
            3 + Math.random() * 3 + "s";

        heart.style.animationDelay =
            Math.random() + "s";

        document.body.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 7000);
    }
}


/* =========================
   SPARKLE BURST
========================= */

function createSparkles() {

    const symbols = [
        "✨",
        "✦",
        "💫",
        "♡"
    ];

    for (let i = 0; i < 12; i++) {

        const sparkle =
            document.createElement("div");

        sparkle.className = "sparkle";

        sparkle.textContent =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        sparkle.style.left = "50%";
        sparkle.style.top = "50%";

        sparkle.style.setProperty(
            "--x",
            (Math.random() * 500 - 250) + "px"
        );

        sparkle.style.setProperty(
            "--y",
            (Math.random() * 500 - 250) + "px"
        );

        document.body.appendChild(sparkle);

        setTimeout(function () {
            sparkle.remove();
        }, 1500);
    }
}


/* =========================
   HEART CURSOR
========================= */

let lastHeart = 0;

document.addEventListener(
    "mousemove",
    function (event) {

        const now = Date.now();

        if (now - lastHeart < 120) {
            return;
        }

        lastHeart = now;

        const heart =
            document.createElement("div");

        heart.className = "cursor-heart";

        heart.textContent = "♡";

        heart.style.left =
            event.clientX + "px";

        heart.style.top =
            event.clientY + "px";

        document.body.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 800);
    }
);


/* =========================
   TYPING EFFECT
========================= */

function startTyping(screen) {

    const paragraphs =
        screen.querySelectorAll("p");

    paragraphs.forEach(function (p, index) {

        setTimeout(function () {

            p.classList.remove("typing");

            void p.offsetWidth;

            p.classList.add("typing");

        }, index * 300);
    });
}


/* =========================
   BACKGROUND PARTICLES
========================= */

function createParticles() {

    const container =
        document.getElementById("particles");

    if (!container) return;

    const symbols = [
        "✦",
        "✧",
        "·",
        "♡"
    ];

    for (let i = 0; i < 35; i++) {

        const particle =
            document.createElement("span");

        particle.className = "particle";

        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.fontSize =
            8 + Math.random() * 18 + "px";

        particle.style.animationDuration =
            5 + Math.random() * 7 + "s";

        particle.style.animationDelay =
            Math.random() * 5 + "s";

        container.appendChild(particle);
    }
}


/* =========================
   START
========================= */

createParticles();

const firstScreen =
    document.querySelector(".screen.active");

if (firstScreen) {
    startTyping(firstScreen);
}


/* =========================
   FINAL ANSWERS
========================= */

function showFinalScreen(id) {

    document.querySelectorAll(".screen").forEach(function(screen) {
        screen.classList.remove("active");
    });

    setTimeout(function() {
        const screen = document.getElementById(id);

        if (screen) {
            screen.classList.add("active");
        }
    }, 300);
}


function sayYes() {

    createHearts(100);
    createSparkles();

    showFinalScreen("yesScreen");
}


function needTime() {

    createHearts(25);
    createSparkles();

    showFinalScreen("timeScreen");
}