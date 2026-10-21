
/**
 * The 18th Chapter
 * Pusat konfigurasi seluruh halaman.
 */
(function (global) {
  "use strict";

  var CONFIG = {
    nickname: "DHINY ALINZIA NURSYAFITRI",
    age: 18,
    password: "221008",
    siteTitle: "The 18th Chapter",

    // Semua path dihitung dari folder utama proyek.
    photoFile: "assets/images/pacar.jpg",
    photoPosition: "50% 22%",
    carFile: "assets/images/mazda.png",

    colors: {
      obsidian: "#101014",
      charcoal: "#19191F",
      burgundy: "#641E32",
      wine: "#8B263E",
      gold: "#D7B777",
      ivory: "#F7F0E5",
      rose: "#B9828F"
    },

    copy: {
      gateKicker: "SEBUAH KEJUTAN KECIL UNTUKMU",
      gateLead:
        "Selamat datang di cerita kecil yang dibuat khusus untukmu.",
      gateIntro:
        "Empat bab. Satu hari istimewa. Banyak doa untuk masa depanmu.",
      gatePrompt: "Siap membuka kejutanmu?",
      gateFooter: "Halaman ini hanya untukmu. ♡",

      homeChapter: "BAB 02 — HARI ISTIMEWA",
      homeTitlePrefix: "Selamat Ulang Tahun ke-",
      homeSubtitle: "Hari ini, satu bab baru dalam hidupmu dimulai.",

      giftChapter: "BAB 03 — SEBUAH KEJUTAN",
      giftLead: "Ada sesuatu yang ingin aku tunjukkan padamu.",
      giftIntro:
        "Kadang, sebuah hadiah bukan hanya tentang benda, tetapi juga tentang mimpi yang membuat kita terus melangkah.",
      giftHeadline:
        "Untuk sebuah mimpi yang semoga suatu hari bisa kamu wujudkan. ♡",
      giftCaption: "Mazda 3 — a little symbol of a beautiful dream.",

      prayerChapter: "BAB 04 — SEBUAH DOA",
      prayerLead: "Untuk masa depanmu.",
      prayerIntro:
        "Ada hal-hal yang mungkin tidak selalu bisa aku berikan, tetapi selalu bisa aku harapkan untukmu.",
      prayerClosing:
        "Untuk semua bab yang sudah kamu lewati, dan semua bab indah yang masih menunggumu.",
      prayerSignature:
        "Kamu adalah bagian istimewa dari ceritaku. Dan ini baru permulaan. ♡",

      easterKicker: "PSST... ADA SATU HAL LAGI. ♡"
    },

    birthdayLetter: [
      "Untuk kamu yang hari ini bertambah usia,",
      "Selamat ulang tahun yang ke-18. ♡",
      "Hari ini bukan sekadar tentang bertambahnya angka usia, tetapi juga tentang kesempatan untuk memulai bab baru, mengenal dirimu lebih jauh, dan menemukan banyak hal indah dalam perjalanan hidupmu.",
      "Aku berharap hari-harimu dipenuhi alasan untuk tersenyum, langkah-langkahmu selalu diberi kemudahan, dan setiap mimpi yang kamu simpan perlahan menemukan jalannya.",
      "Kamu tidak harus mengetahui semua jawaban hari ini. Tidak harus selalu kuat, tidak harus selalu sempurna, dan tidak harus membandingkan perjalananmu dengan siapa pun.",
      "Tumbuhlah dengan waktumu sendiri. Berikan dirimu kesempatan untuk belajar, beristirahat, mencoba lagi, dan menikmati hal-hal kecil yang membuatmu bahagia.",
      "Terima kasih sudah menjadi bagian dari cerita ini. Semoga hari ini kamu bisa merasakan betapa berharganya dirimu.",
      "Selamat ulang tahun, kesayanganku.",
      "Semoga bab ke-18 ini menjadi salah satu bab yang paling indah dalam hidupmu. ♡"
    ],

    giftLetter: [
      "Ini bukan janji bahwa semua impian akan langsung menjadi nyata. Ini adalah pengingat bahwa kamu berhak memiliki mimpi, berusaha untuknya, dan menikmati setiap langkah perjalananmu.",
      "Semoga suatu hari nanti, kamu bisa berdiri di samping sesuatu yang dulu hanya bisa kamu bayangkan, lalu tersenyum karena kamu tahu seberapa jauh kamu telah melangkah."
    ],

    prayerLetter: [
      "Untuk kamu, yang hari ini memulai bab baru dalam hidupnya.",
      "Di usiamu yang ke-18 ini, ada banyak doa yang ingin aku titipkan untuk perjalananmu.",
      "Semoga kamu selalu diberi kesehatan, kekuatan, dan kesempatan untuk menikmati hal-hal baik yang hadir dalam hidupmu.",
      "Semoga hatimu menemukan ketenangan ketika dunia terasa melelahkan. Semoga kamu dikelilingi orang-orang yang tulus, yang menghargaimu, mendukungmu, dan membuatmu merasa aman menjadi dirimu sendiri.",
      "Semoga langkahmu dimudahkan ketika mengejar cita-cita. Semoga setiap usaha yang kamu lakukan membawa pelajaran, pengalaman, dan kesempatan untuk tumbuh menjadi pribadi yang semakin bijaksana.",
      "Aku juga berharap kamu bisa memperlakukan dirimu sendiri dengan lebih lembut. Kamu tidak harus sempurna untuk menjadi berharga. Kamu tidak harus selalu terlihat kuat untuk pantas mendapatkan dukungan.",
      "Ketika hari-harimu terasa berat, semoga kamu tetap menemukan alasan kecil untuk tersenyum. Ketika sesuatu tidak berjalan sesuai rencana, semoga kamu diberi kesabaran untuk mencoba lagi dan keberanian untuk mengambil jalan yang baru.",
      "Semoga mimpi-mimpi yang kamu simpan menemukan jalannya, semoga masa depanmu dipenuhi kesempatan baik, dan semoga kamu selalu memiliki ruang untuk bahagia tanpa harus merasa bersalah karena beristirahat.",
      "Untuk semua hal yang belum bisa aku pastikan hari ini, aku berharap hidup mempertemukanmu dengan banyak kebaikan.",
      "Dan untuk perjalanan panjang yang masih menunggumu, semoga kamu selalu punya alasan untuk percaya bahwa hari esok layak dinantikan.",
      "Selamat ulang tahun yang ke-18.",
      "Semoga kamu tumbuh dengan bahagia, melangkah dengan berani, dan tetap menjadi dirimu sendiri.",
      "Dengan penuh kasih. ♡"
    ],

    easterLetter: [
      "Kalau kamu sudah sampai sejauh ini, berarti kamu telah membaca setiap bagian kecil yang aku siapkan untukmu.",
      "Aku mungkin tidak selalu punya kata-kata yang sempurna, tetapi aku berharap hadiah sederhana ini bisa membuatmu tersenyum.",
      "Hari ini adalah tentang kamu, perjalananmu, mimpi-mimpimu, dan semua hal baik yang masih menunggu di depan.",
      "Jangan lupa merayakan dirimu sendiri, bukan hanya hari ini, tetapi juga pada hari-hari biasa.",
      "Terima kasih sudah membuka hadiah kecil ini sampai akhir.",
      "Happy 18th birthday. ♡"
    ]
  };

  var STORAGE = {
    prayerComplete: "t18c_prayer_complete"
  };

  function prefersReducedMotion() {
    return Boolean(
      global.matchMedia &&
      global.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function applyTheme() {
    var root = document.documentElement;
    var colors = CONFIG.colors;

    if (!root || !colors) return;

    Object.keys(colors).forEach(function (key) {
      root.style.setProperty("--" + key, colors[key]);
    });
  }

  function getByPath(obj, path) {
    return String(path || "")
      .split(".")
      .reduce(function (current, key) {
        return current && current[key] !== undefined
          ? current[key]
          : undefined;
      }, obj);
  }

  function fillBindings(root) {
    var scope = root || document;
    var nodes = scope.querySelectorAll("[data-bind]");

    Array.prototype.forEach.call(nodes, function (element) {
      var value = getByPath(
        CONFIG,
        element.getAttribute("data-bind")
      );

      if (value === undefined || value === null) return;

      element.textContent = String(value);
    });
  }

  function renderParagraphs(container, paragraphs, className) {
    if (!container) return;

    container.textContent = "";

    (paragraphs || []).forEach(function (content, index) {
      var paragraph = document.createElement("p");

      if (className) {
        paragraph.className = className;
      }

      paragraph.textContent = content;
      paragraph.style.setProperty("--i", String(index));
      container.appendChild(paragraph);
    });
  }

  function leaveTo(url) {
    if (!url) return;

    document.body.classList.add("is-leaving");

    var delay = prefersReducedMotion() ? 80 : 420;

    global.setTimeout(function () {
      global.location.href = url;
    }, delay);
  }

  function boot(options) {
    options = options || {};

    applyTheme();
    fillBindings();

    if (CONFIG.siteTitle) {
      document.title =
        CONFIG.siteTitle +
        " — " +
        (options.pageTitle || "Hadiah");
    }

    document.body.classList.add("is-ready");
  }

  global.Chapter18 = {
    CONFIG: CONFIG,
    STORAGE: STORAGE,
    prefersReducedMotion: prefersReducedMotion,
    applyTheme: applyTheme,
    fillBindings: fillBindings,
    renderParagraphs: renderParagraphs,
    leaveTo: leaveTo,
    boot: boot
  };
})(window);
