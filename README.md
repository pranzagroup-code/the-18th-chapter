# The 18th Chapter

Website kejutan ulang tahun ke-18 yang berjalan sepenuhnya di browser. Empat bab: pintu rahasia, ucapan, hadiah Mazda 3, dan doa. Tidak ada backend, database, atau musik.

## 1. Tujuan

Memberikan hadiah digital yang terasa personal: gelap, burgundy, dan champagne gold, dengan alur yang bisa dibaca pelan-pelan. Teks, foto, password, dan warna dikelola dari satu file konfigurasi.

## 2. Struktur folder

```
the-18th-chapter/
├── index.html          # Bab 01 — pintu rahasia
├── home.html           # Bab 02 — ucapan
├── hadiah.html         # Bab 03 — kotak hadiah & Mazda 3
├── doa.html            # Bab 04 — doa & easter egg
├── README.md
├── css/style.css
├── js/
│   ├── config.js       # semua teks dan pengaturan personal
│   ├── login.js
│   ├── home.js
│   ├── hadiah.js
│   └── doa.js
└── assets/
    ├── images/pacar.jpg   # kamu yang menambahkan
    ├── cars/mazda3.svg
    └── icons/             # heart.svg, star.svg
```

`doa.js` memakai `sessionStorage` hanya untuk menandai bahwa surat sudah selesai dibaca dalam satu sesi (`t18c_prayer_complete`). Tidak ada data pribadi yang disimpan.

## 3. Membuka proyek di Cursor

1. Buka folder `WEB ULTAH DHINY` atau langsung folder `the-18th-chapter`.
2. Sunting `js/config.js` untuk nama, password, dan teks.
3. Letakkan foto di `assets/images/pacar.jpg`.

## 4. Menjalankan dengan Live Server

1. Pasang ekstensi **Live Server** di VS Code atau Cursor.
2. Klik kanan `index.html` di dalam `the-18th-chapter`.
3. Pilih **Open with Live Server**.
4. Mulai dari `index.html`, bukan dari file halaman tengah.

Boleh juga membuka `index.html` langsung di browser. Beberapa browser membatasi file lokal, jadi Live Server lebih aman.

## 5. Mengganti nama panggilan

Buka `js/config.js`, ubah:

```js
nickname: "[NAMA_PANGGILAN]",
```

Semua halaman mengambil nama dari nilai ini.

## 6. Mengganti password

Di `js/config.js`:

```js
password: "GANTI_PASSWORD",
```

Password harus sama persis, termasuk huruf besar/kecil. Jangan simpan password yang diketik pengguna di mana pun; situs ini juga tidak menyimpannya.

## 7. Mengganti foto

1. Siapkan foto sendiri (jangan unduh foto orang lain dari internet).
2. Simpan sebagai `assets/images/pacar.jpg`.
3. Jika nama file berbeda, ubah `photoFile` di `config.js`.

Jika foto belum ada, halaman ucapan menampilkan placeholder beserta petunjuk.

## 8. Mengatur crop foto

Di `js/config.js`:

```js
photoPosition: "50% 22%",
```

Formatnya sama dengan CSS `object-position`. Contoh: `"50% 10%"` untuk menggeser wajah ke bawah bingkai, `"30% 20%"` untuk menggeser ke kanan.

## 9. Mengganti teks ucapan, hadiah, dan doa

Semua di `js/config.js`:

- `copy` — judul, kicker, dan kalimat pendek
- `birthdayLetter` — paragraf ucapan
- `giftLetter` — pesan setelah mobil muncul
- `prayerLetter` — isi surat doa
- `easterLetter` — pesan rahasia

Setiap item array menjadi satu paragraf.

## 10. Mengubah warna tema

Ubah objek `colors` di `config.js`. Nilai tersebut ditulis ke CSS variables (`--obsidian`, `--gold`, dan seterusnya) saat halaman dimuat.

## 11. Mengganti ilustrasi Mazda 3

Ganti file `assets/cars/mazda3.svg`, atau ubah `carFile` jika namanya berbeda. Logo di halaman hadiah adalah simbol stylized, bukan logo resmi Mazda, dan terpisah dari ilustrasi mobil.

## 12. Menguji easter egg

1. Buka `doa.html` (lebih baik setelah melewati bab sebelumnya).
2. Baca sampai bagian penutup surat.
3. Tunggu animasi paragraf selesai, lalu gulir sampai teks penutup terlihat.
4. Ornamen bintang kecil muncul. Tekan untuk membuka pesan rahasia.
5. **Tutup Pesan Rahasia** menutup kartu.
6. **Baca Surat Ini Lagi** mengulang animasi dan menyembunyikan easter egg sampai surat selesai sekali lagi.

Easter egg tidak muncul langsung saat halaman dibuka.

## 13. Jika aset tidak tampil

- Pastikan kamu membuka folder `the-18th-chapter` sebagai akar situs, bukan file yang tersimpan di tempat lain.
- Cek nama file: `pacar.jpg` dan `mazda3.svg` harus sesuai `config.js`.
- Gunakan Live Server jika gambar diblokir dari `file://`.
- Foto yang hilang harus memunculkan placeholder, bukan halaman kosong.
- Font Google bersifat opsional. Jika tidak ada internet, situs memakai Georgia dan font sistem.

## 14. Keterbatasan password

Password di website statis **bukan keamanan sungguhan**. Siapa pun yang membuka `js/config.js` bisa membaca katanya. Fitur ini hanya pintu suasana untuk kejutan personal, bukan pelindung data sensitif. Jangan taruh informasi rahasia di situs ini. Halaman lain juga bisa dibuka langsung lewat URL; urutan bab bukan sistem keamanan.

## Alur halaman

`index.html` → `home.html` → `hadiah.html` → `doa.html`

Indikator bab: `01 / 04` sampai `04 / 04`.

Password awal: `GANTI_PASSWORD`
