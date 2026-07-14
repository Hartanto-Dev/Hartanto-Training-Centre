// =============================================
// 1. EFEK KETIK PADA JUDUL
// =============================================
const teksJudul = "Halo, Saya Calon Programmer Handal! 👋";
const elJudul = document.getElementById('judul-utama');
let indeksHuruf = 0;

function ketikJudul() {
    if (indeksHuruf < teksJudul.length) {
        elJudul.textContent += teksJudul.charAt(indeksHuruf);
        indeksHuruf++;
        setTimeout(ketikJudul, 80); // kecepatan ketik 80ms
    } else {
        // Setelah selesai, tampilkan kursor berkedip
        elJudul.style.borderRight = '3px solid #667eea';
        elJudul.style.animation = 'blink 0.7s infinite';
    }
}

// Jalankan saat halaman dimuat
window.addEventListener('DOMContentLoaded', () => {
    // Beri sapaan sesuai waktu sebelum judul diketik
    const jamSekarang = new Date().getHours();
    let sapaan = 'Halo';
    if (jamSekarang < 12) sapaan = 'Selamat Pagi';
    else if (jamSekarang < 17) sapaan = 'Selamat Siang';
    else if (jamSekarang < 19) sapaan = 'Selamat Sore';
    else sapaan = 'Selamat Malam';
    
    // Ubah teks judul dengan sapaan
    teksJudulSapaan = `${sapaan}, Saya Calon Programmer Handal! 👋`;
    // override teksJudul global
    window.teksJudulFinal = teksJudulSapaan;
    ketikJudulDenganSapaan();
});

function ketikJudulDenganSapaan() {
    const teks = window.teksJudulFinal;
    if (indeksHuruf < teks.length) {
        elJudul.textContent += teks.charAt(indeksHuruf);
        indeksHuruf++;
        setTimeout(ketikJudulDenganSapaan, 80);
    } else {
        elJudul.style.borderRight = '3px solid #667eea';
        elJudul.style.animation = 'blink 0.7s infinite';
    }
}

// Animasi kursor berkedip (tambahkan di CSS via JS atau style tag)
const styleSheet = document.createElement("style");
styleSheet.textContent = `
    @keyframes blink {
        0%, 100% { border-color: transparent; }
        50% { border-color: #667eea; }
    }
`;
document.head.appendChild(styleSheet);

// =============================================
// 2. JAM DIGITAL REAL-TIME
// =============================================
function updateJam() {
    const sekarang = new Date();
    const jam = sekarang.getHours().toString().padStart(2, '0');
    const menit = sekarang.getMinutes().toString().padStart(2, '0');
    const detik = sekarang.getSeconds().toString().padStart(2, '0');
    document.getElementById('jam').textContent = `${jam}:${menit}:${detik}`;
}
setInterval(updateJam, 1000);
updateJam(); // langsung tampilkan

// =============================================
// 3. DARK MODE TOGGLE + LOCAL STORAGE
// =============================================
const tombolMode = document.getElementById('toggle-mode');
const ikonMode = document.getElementById('ikon-mode');
const body = document.body;

// Cek preferensi tersimpan
if (localStorage.getItem('tema') === 'gelap') {
    body.classList.add('dark-mode');
    ikonMode.textContent = '☀️';
}

tombolMode.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    ikonMode.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('tema', isDark ? 'gelap' : 'terang');
});

// =============================================
// 4. TOMBOL SALIN MOTTO
// =============================================
const tombolSalin = document.getElementById('salin-motto');
const teksMotto = document.getElementById('teks-motto');

tombolSalin.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(teksMotto.textContent.trim());
        tampilkanNotifikasi('✅ Motto berhasil disalin!');
    } catch (err) {
        // Fallback untuk browser lama
        const textarea = document.createElement('textarea');
        textarea.value = teksMotto.textContent.trim();
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        tampilkanNotifikasi('✅ Motto berhasil disalin (fallback)!');
    }
});

// =============================================
// 5. FUNGSI NOTIFIKASI
// =============================================
function tampilkanNotifikasi(pesan) {
    const notif = document.createElement('div');
    notif.className = 'notifikasi';
    notif.textContent = pesan;
    document.body.appendChild(notif);
    
    setTimeout(() => notif.classList.add('muncul'), 10);
    
    setTimeout(() => {
        notif.classList.remove('muncul');
        setTimeout(() => notif.remove(), 300);
    }, 2000);
}

// =============================================
// 6. TANGGAL OTOMATIS (sudah ada di inline, tapi kita perkuat)
// =============================================
document.getElementById('tanggal').textContent = new Date().toLocaleDateString('id-ID');