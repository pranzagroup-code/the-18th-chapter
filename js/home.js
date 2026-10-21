
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
      pageTitle: "Hari Istimewa"
    });

    // Isi usia dan judul secara dinamis.
    var ageElement = document.getElementById("birthday-age");
    var headingElement = document.getElementById("birthday-heading");

    if (ageElement) {
      ageElement.textContent = String(config.age);
      ageElement.setAttribute(
        "aria-label",
        "Usia " + config.age + " tahun"
      );
    }

    if (headingElement) {
      headingElement.textContent =
        config.copy.homeTitlePrefix + config.age;
    }

    // Tampilkan surat ulang tahun dari konfigurasi.
    var letter = document.getElementById("birthday-letter");

    if (letter) {
      chapter.renderParagraphs(
        letter,
        config.birthdayLetter,
        "letter-paragraph"
      );
    }

    // Siapkan foto dan posisi pemotongannya.
    var photo = document.getElementById("birthday-photo");
    var photoWrap = document.getElementById("photo-wrap");
    var placeholder = document.getElementById("photo-placeholder");

    function showPhoto() {
      if (photoWrap) photoWrap.style.display = "block";
      if (placeholder) placeholder.style.display = "none";
    }

    function showPhotoPlaceholder() {
      if (photoWrap) photoWrap.style.display = "none";
      if (placeholder) placeholder.style.display = "grid";
    }

    if (photo) {
      photo.alt = "Foto kenangan " + config.nickname;
      photo.style.objectPosition = config.photoPosition;
      photo.addEventListener("load", showPhoto);
      photo.addEventListener("error", showPhotoPlaceholder);

      // Tangani juga gambar yang sudah selesai dimuat.
      photo.src = config.photoFile;

      if (photo.complete) {
        if (photo.naturalWidth > 0) {
          showPhoto();
        } else {
          showPhotoPlaceholder();
        }
      }
    }

    // Navigasi menuju halaman hadiah.
    var giftLink = document.getElementById("go-to-gift");

    if (giftLink) {
      giftLink.addEventListener("click", function (event) {
        // Biarkan navigasi tab baru bekerja secara normal.
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
        chapter.leaveTo(giftLink.href);
      });
    }

    // Partikel dekoratif sederhana.
    var particleRoot = document.getElementById("particles");

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
