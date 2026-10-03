
const $ = (selector) =>
  document.querySelector(selector);

const $$ = (selector) =>
  [...document.querySelectorAll(selector)];


/* =========================
   SCREEN TRANSITIONS
========================= */

function showScreen(id) {

  const current =
    document.querySelector(".screen.active");

  const next =
    document.getElementById(id);

  if (!next) return;

  if (current === next) return;

  if (current) {
    current.classList.remove("active");
  }

  setTimeout(() => {
    next.classList.add("active");
    next.scrollTop = 0;
  }, 80);
}


/* =========================
   NEXT BUTTONS
========================= */

$$("[data-next]").forEach(button => {

  button.addEventListener("click", () => {

    showScreen(
      button.getAttribute("data-next")
    );

  });

});


/* =========================
   FLOATING HEARTS
========================= */

const hearts =
  document.getElementById("hearts");

function createHeart() {

  if (!hearts) return;

  const heart =
    document.createElement("div");

  heart.className = "heart";

  heart.style.left =
    Math.random() * 100 + "%";

  heart.style.width =
    (8 + Math.random() * 7) + "px";

  heart.style.height =
    (8 + Math.random() * 7) + "px";

  const duration =
    7 + Math.random() * 5;

  heart.style.animationDuration =
    duration + "s";

  hearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

setInterval(createHeart, 1100);

for (let i = 0; i < 7; i++) {

  setTimeout(
    createHeart,
    i * 500
  );

}


/* =========================
   CANDLE
========================= */

const blowBtn =
  document.getElementById("blowBtn");

const flame =
  document.getElementById("flame");

const afterBlow =
  document.getElementById("afterBlow");


if (blowBtn) {

  blowBtn.addEventListener(
    "click",
    () => {

      flame.style.opacity = "0";

      flame.style.transform =
        "rotate(45deg) scale(1.8)";

      blowBtn.classList.add(
        "hidden"
      );

      setTimeout(() => {

        afterBlow.classList.remove(
          "hidden"
        );

      }, 550);

    }
  );

}


/* =========================
   MEMORIES
========================= */

const photos = [

  {
    src: "IMG_20261003_150001.jpg",
    text: "A beautiful memory"
  },

  {
    src: "Snapchat-1124254100.jpg",
    text: "A special moment"
  },

  {
    src: "IMG_20261003_150001.jpg",
    text: "A memory worth keeping"
  }

];

let photoIndex = 0;

const photo =
  document.getElementById("photo");

const caption =
  document.getElementById("photoCaption");

const dots =
  $$(".dot");


function updatePhoto(index) {

  if (!photo) return;

  photo.classList.add("changing");

  setTimeout(() => {

    photo.src =
      photos[index].src;

    caption.innerHTML =
      photos[index].text +
      ' <span class="flower-dot">✿</span>';

    dots.forEach(
      (dot, i) => {

        dot.classList.toggle(
          "active",
          i === index
        );

      }
    );

    photo.onload = () => {

      photo.classList.remove(
        "changing"
      );

    };

  }, 260);
}


const nextPhoto =
  document.getElementById("nextPhoto");

const prevPhoto =
  document.getElementById("prevPhoto");


if (nextPhoto) {

  nextPhoto.addEventListener(
    "click",
    () => {

      photoIndex++;

      if (
        photoIndex >=
        photos.length
      ) {
        photoIndex = 0;
      }

      updatePhoto(photoIndex);

    }
  );

}


if (prevPhoto) {

  prevPhoto.addEventListener(
    "click",
    () => {

      photoIndex--;

      if (photoIndex < 0) {
        photoIndex =
          photos.length - 1;
      }

      updatePhoto(photoIndex);

    }
  );

}


/* =========================
   SWIPE PHOTO
========================= */

let touchStartX = 0;

if (photo) {

  photo.addEventListener(
    "touchstart",
    event => {

      touchStartX =
        event.changedTouches[0]
          .screenX;

    },
    { passive: true }
  );


  photo.addEventListener(
    "touchend",
    event => {

const endX =
        event.changedTouches[0]
          .screenX;

      const difference =
        endX - touchStartX;

      if (
        Math.abs(difference) < 45
      ) {
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

const envelope =
  document.getElementById("envelope");

const letterBox =
  document.getElementById("letterBox");

const letterHint =
  document.getElementById("letterHint");

const letterNext =
  document.getElementById("letterNext");


if (envelope) {

  envelope.addEventListener(
    "click",
    () => {

      envelope.classList.add(
        "open"
      );

      setTimeout(() => {

        letterBox.classList.add(
          "show"
        );

        letterHint.innerHTML =
          'A little message, just for you <span class="tiny-heart">♥</span>';

        letterNext.classList.remove(
          "hidden"
        );

      }, 500);

    }
  );

}


/* =========================
   GIFT
========================= */

const gift =
  document.getElementById("gift");

const openGift =
  document.getElementById("openGift");


if (openGift) {

  openGift.addEventListener(
    "click",
    () => {

      gift.classList.add(
        "open"
      );

      openGift.disabled = true;

      openGift.textContent =
        "Opening...";

      setTimeout(() => {

        showScreen("final");

      }, 1000);

    }
  );

}


/* =========================
   RESTART
========================= */

const restart =
  document.getElementById("restart");


if (restart) {

  restart.addEventListener(
    "click",
    () => {

      photoIndex = 0;

      updatePhoto(0);

      if (flame) {

        flame.style.opacity =
          "1";

        flame.style.transform =
          "rotate(45deg) scale(1)";

      }

      if (blowBtn)
        blowBtn.classList.remove(
          "hidden"
        );

      if (afterBlow)
        afterBlow.classList.add(
          "hidden"
        );

      if (envelope)
        envelope.classList.remove(
          "open"
        );

      if (letterBox)
        letterBox.classList.remove(
          "show"
        );

      if (letterNext)
        letterNext.classList.add(
          "hidden"
        );

      if (gift)
        gift.classList.remove(
          "open"
        );

      if (openGift) {

        openGift.disabled =
          false;

        openGift.textContent =
          "Open My Gift";

      }

      showScreen("welcome");

    }
  );

}


/* =========================
   CLICK HEART
========================= */

document.addEventListener(
  "click",
  event => {

    if (
      event.target.closest("button") ||
      event.target.closest("img")
    ) {
      return;
    }

    const heart =
      document.createElement("div");

    heart.className = "heart";

    heart.style.position =
      "fixed";

    heart.style.left =
      event.clientX + "px";

    heart.style.top =
      event.clientY + "px";

    heart.style.bottom =
      "auto";

    heart.style.zIndex =
      "9999";

    heart.style.pointerEvents =
      "none";

    heart.style.animationDuration =
      ".8s";

    document.body.appendChild(
      heart
    );

    setTimeout(() => {

      heart.remove();

    }, 850);

  }
);
