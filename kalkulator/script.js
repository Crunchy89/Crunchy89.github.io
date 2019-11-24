let bil = "",
    bil1, bil2, jumlah, pilih;

const tampil = document.getElementById('tampil');
const titik = document.getElementById('titik');
const kali = document.getElementById('kali');
const bagi = document.getElementById('bagi');
const tambah = document.getElementById('tambah');
const kurang = document.getElementById('kurang');
const clear = document.getElementById('clear');
const hasil = document.getElementById('hasil');

titik.addEventListener("click", function () {
    bil += ".";
    tampil.value = bil;
})

kali.addEventListener('click', function () {
    bil1 = parseFloat(tampil.value);
    bil = "";
    pilih = 1;
})

bagi.addEventListener('click', function () {
    bil1 = parseFloat(tampil.value);
    bil = "";
    pilih = 2;
})

tambah.addEventListener('click', function () {
    bil1 = parseFloat(tampil.value);
    bil = "";
    pilih = 3;
})

kurang.addEventListener('click', function () {
    bil1 = parseFloat(tampil.value);
    bil = "";
    pilih = 4;
})
clear.addEventListener('click', function () {
    bil = "";
    bil1 = 0;
    bil2 = 0;
    tampil.value = bil;
})
hasil.addEventListener('click', function () {
    switch (pilih) {
        case 1:
            bil2 = parseFloat(tampil.value);
            jumlah = bil1 * bil2;
            bil = "";
            tampil.value = jumlah;
            break;
        case 2:
            bil2 = parseFloat(tampil.value);
            jumlah = bil1 / bil2;
            bil = "";
            tampil.value = jumlah;
            break;
        case 3:
            bil2 = parseFloat(tampil.value);
            jumlah = bil1 + bil2;
            bil = "";
            tampil.value = jumlah;
            break;
        case 4:
            bil2 = parseFloat(tampil.value);
            jumlah = bil1 - bil2;
            bil = "";
            tampil.value = jumlah;
            break;
    }
})

for (let i = 0; i < 10; i++) {
    var angka = [];
    let b = "angka_" + i;
    angka[i] = document.getElementById(b);
    angka[i].addEventListener("click", function () {
        bil += i;
        tampil.value = bil;
    })
}