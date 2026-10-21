(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    if (!window.Chapter18) return;
    Chapter18.boot({ pageTitle: "Doa untuk Masa Depanmu" });

    var cfg = Chapter18.CONFIG;
    var letter = document.getElementById("prayer-letter");
    var easter = document.getElementById("easter-letter");
    var trigger = document.getElementById("egg-trigger");
    var layer = document.getElementById("secret-layer");
    var closeBtn = document.getElementById("close-secret");
    var replay = document.getElementById("replay-letter");
    var particleRoot = document.getElementById("egg-particles");
    var completeTimer = null;

    Chapter18.renderParagraphs(letter, cfg.prayerLetter);
    Chapter18.renderParagraphs(easter, cfg.easterLetter);

    function letterDuration() {
      if (Chapter18.prefersReducedMotion()) return 120;
      return 400 + (cfg.prayerLetter.length * 90) + 700;
    }

    function markComplete() {
      try {
        window.sessionStorage.setItem(Chapter18.STORAGE.prayerComplete, "1");
      } catch (err) {
        /* sessionStorage boleh gagal di mode ketat */
      }
      if (trigger) {
        trigger.hidden = false;
        trigger.classList.add("is-ready");
      }
    }

    function hideEgg() {
      if (trigger) {
        trigger.hidden = true;
        trigger.classList.remove("is-ready");
      }
      try {
        window.sessionStorage.removeItem(Chapter18.STORAGE.prayerComplete);
      } catch (err) {
        /* abaikan */
      }
    }

    var seenEnding = false;
    var closing = document.getElementById("closing-block");
    if (closing && "IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) seenEnding = true;
          });
        },
        { threshold: 0.45 }
      );
      observer.observe(closing);
    } else {
      seenEnding = true;
    }

    function scheduleComplete() {
      window.clearTimeout(completeTimer);
      completeTimer = window.setTimeout(function () {
        if (seenEnding || Chapter18.prefersReducedMotion()) {
          markComplete();
          return;
        }
        completeTimer = window.setTimeout(scheduleComplete, 400);
      }, letterDuration());
    }

    function replayLetter() {
      hideEgg();
      closeSecret();
      Chapter18.renderParagraphs(letter, cfg.prayerLetter);
      scheduleComplete();
    }

    function openSecret() {
      if (!trigger || trigger.hidden) return;
      document.body.classList.add("is-egg");
      if (layer) {
        layer.hidden = false;
        layer.classList.add("is-open");
      }
      if (particleRoot && !Chapter18.prefersReducedMotion() && !particleRoot.childElementCount) {
        var i;
        for (i = 0; i < 16; i += 1) {
          var dot = document.createElement("span");
          dot.className = "particle";
          dot.style.left = Math.round(Math.random() * 100) + "%";
          dot.style.animationDuration = 8 + Math.round(Math.random() * 8) + "s";
          particleRoot.appendChild(dot);
        }
      }
      if (closeBtn) closeBtn.focus();
    }

    function closeSecret() {
      document.body.classList.remove("is-egg");
      if (layer) {
        layer.classList.remove("is-open");
        layer.hidden = true;
      }
      if (particleRoot) particleRoot.textContent = "";
      if (trigger && !trigger.hidden) trigger.focus();
    }

    scheduleComplete();

    if (trigger) trigger.addEventListener("click", openSecret);
    if (closeBtn) closeBtn.addEventListener("click", closeSecret);
    if (replay) replay.addEventListener("click", replayLetter);
    if (layer) {
      layer.addEventListener("click", function (event) {
        if (event.target === layer) closeSecret();
      });
    }
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeSecret();
    });
  });
})();
