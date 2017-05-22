/*
  StudentID: Budhi Priyatmojo
  Challenge Code:
  [Week 2 Day 5]Membuat Aplikasi Sederhana dengan JavaScript
*/

/*
  Aplikasi ini berjudul "Tuntunan Sholat 5 Waktu".
  Tujuannya untuk memberikan wawasan tentang bagaimana cara melakukan sholat wajib 5 waktu.
*/

/*
  CARA PENGGUNAAN:
  Masukkan sebuah angka di variable input yang berada diatas tulisan switch
*/

//function untuk tata cara sholat per raka'at
function tataCaraSholat (jumlahRakaat, namaSholat) {
  for (var i = 1; i<=jumlahRakaat; i++) {
    if (i != 1) {
      console.log('======= MASUK RAKA\'AT KE- ' +i+ ' =======');
    }
    console.log('Membaca Surat Al-Fatihah');
    console.log('Membaca Surat pilihan yang dihafal dari Al-Qur\'an');
    console.log('Ruku');
    console.log('I\'tidal');
    console.log('Sujud');
    console.log('Duduk antara dua sujud');
    console.log('Sujud');
    if ((namaSholat == 'Shubuh' && i == 2) ||
        (namaSholat == 'Maghrib' && i == 3) ||
        (i==4)) {
      console.log('Tasyahud akhir');
      console.log('Salam');
    }
    if (namaSholat != 'Shubuh' && i == 2) {
      console.log('Tasyahud awal');
    }
    console.log('\n')
  }
}

//Mmebuat object tuntunanSholat
var tuntunanSholat = function (sholat, rakaat, waktu) {
  this.sholat = sholat,
  this.rakaat = rakaat,
  this.waktu = waktu,
  this.bacaNiat = function () {
    console.log('Membaca niat sholat ' +sholat+ ' didalam hati.');
    console.log('Takbiratul ihram');
    console.log('Membaca do\'a Iftitah');
  },
  this.ajakan = function () {
    console.log('Mari kita dirikan Sholat ' +sholat+ ' ! \n');
  },
  this.doa = function () {
    console.log('Alhamdulillah, semoga Allah merahmati dan meridhoi.');
    console.log('Aamiin');
  }
}

//melakukan instantiate
var shubuh = new tuntunanSholat ('Shubuh', 2, 'di awal pagi');
var dzuhur = new tuntunanSholat ('Dzuhur', 4, 'di tengah hari');
var ashar = new tuntunanSholat ('Ashar', 4, 'di waktu petang');
var maghrib = new tuntunanSholat ('Maghrib', 3, 'di waktu senja');
var isya = new tuntunanSholat ('Isya', 4, 'di malam hari');

//variable
var input;

//program utama
input = 6;
switch (input) {
  case 1: {
    console.log('Sholat ' +shubuh.sholat+ ' ditunaikan ' +shubuh.waktu+ ' sebanyak ' +shubuh.rakaat+ ' raka\'at.');
    shubuh.ajakan();
    shubuh.bacaNiat();
    tataCaraSholat(shubuh.rakaat, shubuh.sholat);
    shubuh.doa();
    break;
  }
  case 2: {
    console.log('Sholat ' +dzuhur.sholat+ ' ditunaikan ' +dzuhur.waktu+ ' sebanyak ' +dzuhur.rakaat+ ' raka\'at.');
    dzuhur.ajakan();
    dzuhur.bacaNiat();
    tataCaraSholat(dzuhur.rakaat, dzuhur.sholat);
    dzuhur.doa();
    break;
  }
  case 3: {
    console.log('Sholat ' +ashar.sholat+ ' ditunaikan ' +ashar.waktu+ ' sebanyak ' +ashar.rakaat+ ' raka\'at.');
    ashar.ajakan();
    ashar.bacaNiat();
    tataCaraSholat(ashar.rakaat, ashar.sholat);
    ashar.doa();
    break;
  }
  case 4: {
    console.log('Sholat ' +maghrib.sholat+ ' ditunaikan ' +maghrib.waktu+ ' sebanyak ' +maghrib.rakaat+ ' raka\'at.');
    maghrib.ajakan();
    maghrib.bacaNiat();
    tataCaraSholat(maghrib.rakaat, maghrib.sholat);
    maghrib.doa();
    break;
  }
  case 5: {
    console.log('Sholat ' +isya.sholat+ ' ditunaikan ' +isya.waktu+ ' sebanyak ' +isya.rakaat+ ' raka\'at.');
    isya.ajakan();
    isya.bacaNiat();
    tataCaraSholat(isya.rakaat, isya.sholat);
    isya.doa();
    break;
  }
  default: {
    console.log('Saudaraku, Sholat wajib hanya 5 waktu.');
    console.log('\n')
  }
}
