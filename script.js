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

    }, 1100);

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

    if (flame) {
      flame.style.opacity = "1";
      flame.style.transform = "scale(1)";
    }

    if (blowBtn) {
      blowBtn.classList.remove("hidden");
      blowBtn.disabled = false;
    }

    if (afterBlow) {
      afterBlow.classList.add("hidden");
    }

    if (envelope) {
      envelope.classList.remove("open");
    }

    if (letterBox) {
      letterBox.classList.remove("show");
    }

    if (letterNext) {
      letterNext.classList.add("hidden");
    }

    if (gift) {
      gift.classList.remove("open");
    }

    if (openGift) {
      openGift.disabled = false;
      openGift.textContent = "Open My Gift ✨";
    }

    showScreen("welcome");

  });

}


/* =========================
   BACKGROUND CLICK EFFECT
========================= */

document.addEventListener("click", (event) => {

  const x = event.clientX;
  const y = event.clientY;

  const sparkle = document.createElement("div");

  sparkle.textContent = "💗";

  sparkle.style.position = "fixed";
  sparkle.style.left = x + "px";
  sparkle.style.top = y + "px";
  sparkle.style.zIndex = "9999";
  sparkle.style.pointerEvents = "none";
  sparkle.style.fontSize = "16px";
  sparkle.style.transition =
    "all .8s ease";

  document.body.appendChild(sparkle);

  requestAnimationFrame(() => {

    sparkle.style.transform =
      "translateY(-45px) scale(1.5)";

    sparkle.style.opacity = "0";

  });

  setTimeout(() => {
    sparkle.remove();
  }, 850);

});


/* =========================
   AUTO FLOATING HEARTS
========================= */

for (let i = 0; i < 8; i++) {
  setTimeout(createHeart, i * 500);
      }
