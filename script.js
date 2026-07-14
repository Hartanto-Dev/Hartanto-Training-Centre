// Tunggu hingga seluruh konten HTML dimuat
document.addEventListener('DOMContentLoaded', function() {

  // Ambil tombol pertama
  const btn1 = document.getElementById('btnCard1');
  // Ambil tombol kedua
  const btn2 = document.getElementById('btnCard2');

  // Fungsi untuk menampilkan pesan
  function showMessage(buttonId) {
    alert('Kamu mengklik tombol pada card ' + buttonId);
  }

  // Pasang event listener pada tombol 1
  if (btn1) {
    btn1.addEventListener('click', function() {
      showMessage('1');
    });
  }

  // Pasang event listener pada tombol 2
  if (btn2) {
    btn2.addEventListener('click', function() {
      showMessage('2');
    });
  }

});