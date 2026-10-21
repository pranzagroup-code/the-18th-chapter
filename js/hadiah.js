
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    if (!window.Chapter18) {
      console.error("The 18th Chapter: config.js belum dimuat.");
      return;
    }

    var chapter = window.Chapter18;
    var config = chapter.CONFIG;

    chapter.boot({
      pageTitle: "Sebuah Kejutan"
    });

    var giftBox = document.getElementById("gift-box");
    var giftHint = document.getElementById("gift-hint");
    var resetButton = document.getElementById("reset-gift");
    var carImage = document.getElementById("car-image");
    var carMini = document.getElementById("car-mini");
    var giftLetter = document.getElementById("gift-letter");
    var prayerLink = document.getElementById("go-to-prayer");
    var particleRoot = document.getElementById("particles");

    var isOpen = false;
    var openTimer = null;

    // Isi surat hadiah dari konfigurasi utama.
    if (giftLetter) {
      chapter.renderParagraphs(
        giftLetter,
        config.giftLetter,
        "gift-paragraph"
      );
    }

    // Muat ilustrasi mobil dari path konfigurasi.
    function setCarImage(image) {
      if (!image) return;

      image.addEventListener("error", function () {
        image.classList.add("image-unavailable");
        image.setAttribute("data-image-error", "true");
      });

      image.addEventListener("load", function () {
        image.classList.remove("image-unavailable");
        image.removeAttribute("data-image-error");
      });

      image.src = config.carFile;
    }

    setCarImage(carImage);
    setCarImage(carMini);

    function updateHint(message) {
      if (giftHint) {
        giftHint.textContent = message;
      }
    }

    function openGift() {
      if (isOpen || !giftBox) return;

      isOpen = true;
      giftBox.classList.add("is-open");
      giftBox.setAttribute("aria-expanded", "true");
      giftBox.setAttribute("aria-label", "Kotak hadiah telah dibuka");

      updateHint("Kejutan kecil ini untukmu. ♡");

      openTimer = window.setTimeout(function () {
        document.body.classList.add("is-revealed");
      }, chapter.prefersReducedMotion() ? 30 : 850);
    }

    function resetGift() {
      if (openTimer !== null) {
        window.clearTimeout(openTimer);
        openTimer = null;
      }

      isOpen = false;

      document.body.classList.remove("is-revealed");
      giftBox.classList.remove("is-open");
      giftBox.setAttribute("aria-expanded", "false");
      giftBox.setAttribute("aria-label", "Buka kotak hadiah");

      updateHint("Sentuh kotaknya untuk membuka kejutanmu. ♡");

      giftBox.focus();
    }

    if (giftBox) {
      giftBox.addEventListener("click", openGift);
    }

    if (resetButton) {
      resetButton.addEventListener("click", resetGift);
    }

    if (prayerLink) {
      prayerLink.addEventListener("click", function (event) {
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) {
          return;
        }

        event.preventDefault();
        chapter.leaveTo(prayerLink.href);
      });
    }

    // Partikel dekoratif.
    if (
      particleRoot &&
      !chapter.prefersReducedMotion()
    ) {
      for (var i = 0; i < 18; i += 1) {
        var particle = document.createElement("span");

        particle.className = "particle";
        particle.style.left = Math.round(Math.random() * 100) + "%";
        particle.style.top = Math.round(Math.random() * 100) + "%";
        particle.style.animationDuration =
          10 + Math.round(Math.random() * 10) + "s";
        particle.style.animationDelay =
          -Math.round(Math.random() * 12) + "s";

        particleRoot.appendChild(particle);
      }
    }
  });
})();
