
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];


/* =========================
   SCREEN CHANGE
========================= */

function showScreen(id) {

  const current = $(".screen.active");
  const next = document.getElementById(id);

  if (!next || current === next) return;

  if (current) {
    current.classList.remove("active");
  }

  setTimeout(() => {
    next.classList.add("active");
  }, 100);

}


/* =========================
   NEXT BUTTONS
========================= */

$$("[data-next]").forEach(button => {

  button.addEventListener("click", () => {

    const nextScreen =
      button.getAttribute("data-next");

    showScreen(nextScreen);

  });

});


/* =========================
   FLOATING HEARTS
========================= */

const hearts = $("#hearts");

function createHeart() {

  if (!hearts) return;

  const heart =
    document.createElement("div");

  heart.className = "heart";

  heart.textContent =
    Math.random() > .5 ? "♥" : "♡";

  heart.style.left =
    Math.random() * 100 + "%";

  heart.style.fontSize =
    (12 + Math.random() * 22) + "px";

  const duration =
    6 + Math.random() * 6;

  heart.style.animationDuration =
    duration + "s";

  hearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);

}

setInterval(createHeart, 900);


/* =========================
   CANDLE
========================= */

const blowBtn = $("#blowBtn");
const flame = $("#flame");
const afterBlow = $("#afterBlow");

if (blowBtn) {

  blowBtn.addEventListener("click", () => {

    flame.style.transform =
      "scale(1.6)";

    flame.style.opacity = "0";

    blowBtn.classList.add("hidden");

    setTimeout(() => {

      afterBlow.classList.remove("hidden");

    }, 600);

  });

}


/* =========================
   PHOTOS
========================= */

const photos = [

  {
    src: "IMG_20261003_150001.jpg",
    text: "Happy Birthday! 💗"
  },

  {
    src: "Snapchat-1124254100.jpg",
    text: "A beautiful memory 🌹"
  },

  {
    src: "IMG_20261003_150001.jpg",
    text: "Celebrating my special Chidchidi ✨"
  }

];

let photoIndex = 0;

const photo = $("#photo");
const caption = $("#photoCaption");
const dots = $$(".dot");


function updatePhoto(index) {

  if (!photo) return;

  photo.classList.add("changing");

  setTimeout(() => {

    photo.src =
      photos[index].src;

    caption.textContent =
      photos[index].text;

    dots.forEach((dot, i) => {

      dot.classList.toggle(
        "active",
        i === index
      );

    });

    photo.onload = () => {

      photo.classList.remove("changing");

    };

  }, 300);

}


const nextPhoto = $("#nextPhoto");
const prevPhoto = $("#prevPhoto");


if (nextPhoto) {

  nextPhoto.addEventListener("click", () => {

    photoIndex++;

    if (photoIndex >= photos.length) {
      photoIndex = 0;
    }

    updatePhoto(photoIndex);

  });

}


if (prevPhoto) {

  prevPhoto.addEventListener("click", () => {

    photoIndex--;

    if (photoIndex < 0) {
      photoIndex = photos.length - 1;
    }

    updatePhoto(photoIndex);

  });

}


/* =========================
   PHOTO SWIPE
========================= */

let touchStartX = 0;

if (photo) {

  photo.addEventListener(
    "touchstart",
    (event) => {

      touchStartX =
        event.changedTouches[0].screenX;

    },
    { passive: true }
  );


  photo.addEventListener(
    "touchend",
    (event) => {

      const touchEndX =
        event.changedTouches[0].screenX;

      const difference =
        touchEndX - touchStartX;

      if (Math.abs(difference) < 50) {
        return;
      }

      if (difference < 0) {
        nextPhoto.click();
      } else {
        prevPhoto.click();
      }

    },
    { passive: true }
  );

}


/* =========================
   ENVELOPE
========================= */

const envelope = $("#envelope");
const letterBox = $("#letterBox");
const letterHint = $("#letterHint");
const letterNext = $("#letterNext");


if (envelope) {

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {

      letterBox.classList.add("show");

      letterHint.textContent =
        "A little message, just for you 💗";

      letterNext.classList.remove("hidden");

    }, 500);

  });

}


/* =========================
   GIFT
========================= */

const gift = $("#gift");
const openGift = $("#openGift");


if (openGift) {

  openGift.addEventListener("click", () => {

    gift.classList.add("open");

    openGift.disabled = true;

    openGift.textContent =
      "Opening... 💗";

    setTimeout(() => {

      showScreen("final");

    }, 1000);

  });

}


/* =========================
   RESTART
========================= */

const restart = $("#restart");


if (restart) {

  restart.addEventListener("click", () => {

    photoIndex = 0;

    updatePhoto(0);

    flame.style.opacity = "1";
    flame.style.transform = "scale(1)";

    blowBtn.classList.remove("hidden");
    afterBlow.classList.add("hidden");

    envelope.classList.remove("open");
    letterBox.classList.remove("show");

    letterNext.classList.add("hidden");

    gift.classList.remove("open");

    openGift.disabled = false;

    openGift.textContent =
      "Open My Gift ✨";

    showScreen("welcome");

  });

}


/* =========================
   CLICK HEART EFFECT
========================= */

document.addEventListener("click", (event) => {

  const heart =
    document.createElement("div");

  heart.textContent = "💗";

  heart.style.position = "fixed";

  heart.style.left =
    event.clientX + "px";

  heart.style.top =
    event.clientY + "px";

  heart.style.zIndex = "9999";

  heart.style.pointerEvents = "none";

  heart.style.fontSize = "17px";

  heart.style.transition =
    "all .8s ease";

  document.body.appendChild(heart);

  requestAnimationFrame(() => {

    heart.style.transform =
      "translateY(-45px) scale(1.4)";

    heart.style.opacity = "0";

  });

  setTimeout(() => {

    heart.remove();

  }, 850);

});


/* =========================
   INITIAL HEARTS
========================= */

for (let i = 0; i < 8; i++) {

  setTimeout(
    createHeart,
    i * 400
  );

}
