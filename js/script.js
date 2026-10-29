// data pesanan
var pesanan = [];

function pesan(nama, harga) {
    var sudahAda = false;

    for (var i = 0; i < pesanan.length; i++) {
        if (pesanan[i].nama == nama) {
            pesanan[i].jumlah++;
            sudahAda = true;
        }
    }

    if (sudahAda == false) {
        pesanan.push({ nama: nama, harga: harga, jumlah: 1 });
    }

    // hitung total
    var total = 0;
    var teks = "";
    for (var i = 0; i < pesanan.length; i++) {
        total = total + pesanan[i].harga * pesanan[i].jumlah;
        teks = teks + pesanan[i].nama + " x" + pesanan[i].jumlah + "<br>";
    }

    document.getElementById("hasil").innerHTML = teks + "total: Rp" + total;
}

// cek login
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "" || password == "") {
        alert("isi username dan password dulu");
    } else {
        alert("selamat datang " + username);
    }
}
