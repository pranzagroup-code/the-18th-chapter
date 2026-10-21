
(function () {
  "use strict";

  function makeParticles(root) {
    if (
      !root ||
      !window.Chapter18 ||
      Chapter18.prefersReducedMotion()
    ) {
      return;
    }

    for (var i = 0; i < 18; i += 1) {
      var dot = document.createElement("span");

      dot.className = "particle";
      dot.style.left = Math.round(Math.random() * 100) + "%";
      dot.style.animationDuration =
        10 + Math.round(Math.random() * 10) + "s";
      dot.style.animationDelay =
        -Math.round(Math.random() * 12) + "s";
      dot.style.opacity = String(0.15 + Math.random() * 0.3);

      root.appendChild(dot);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (!window.Chapter18) return;

    Chapter18.boot({
      pageTitle: "Pintu Rahasia"
    });

    makeParticles(document.getElementById("particles"));

    var form = document.getElementById("gate-form");
    var input = document.getElementById("secret");
    var toggle = document.getElementById("toggle-secret");
    var error = document.getElementById("gate-error");
    var envelope = document.getElementById("envelope");

    if (!form || !input) return;

    var submitting = false;

    function showError(message) {
      if (error) {
        error.textContent = message;
      }

      input.classList.add("is-invalid");
      input.focus();
    }

    function clearError() {
      input.classList.remove("is-invalid");

      if (error) {
        error.textContent = "";
      }
    }

    if (toggle) {
      toggle.addEventListener("click", function () {
        var show = input.type === "password";

        // Gunakan tipe input yang valid.
        input.type = show ? "text" : "password";

        toggle.setAttribute("aria-pressed", String(show));
        toggle.textContent = show ? "Sembunyikan" : "Tampilkan";
      });
    }

    input.addEventListener("input", clearError);

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (submitting) return;

      var typed = input.value;

      if (!typed.trim()) {
        showError("Masukkan kata rahasia terlebih dahulu.");
        return;
      }

      if (typed !== Chapter18.CONFIG.password) {
        showError("Kata rahasia belum tepat. Coba lagi dengan lembut, ya.");
        return;
      }

      clearError();
      submitting = true;

      if (envelope) {
        envelope.classList.add("is-open");
      }

      var submitButton = form.querySelector('button[type="submit"]');

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Membuka kejutan...";
      }

      var delay = Chapter18.prefersReducedMotion() ? 120 : 880;

      window.setTimeout(function () {
        window.location.href = "home.html";
      }, delay);
    });
  });
})();
