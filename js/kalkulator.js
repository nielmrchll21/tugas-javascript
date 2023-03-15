function tambah(){
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 + a2;
    frm.hasil.value = total;
}

function kurang(){
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 - a2;
    frm.hasil.value = total;
}
function bagi(){
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 / a2;
    frm.hasil.value = total;
}
function kali(){
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 * a2;
    frm.hasil.value = total;
}
function pangkat(){
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 ** a2;
    frm.hasil.value = total;
}
function peringatan(){
    let peringatan = document.getElementById('kalkulator').angka.angka2.value;
    let input ='proses perhitungan anda selesai ' + peringatan ;
    let no_input = 'angka belum terisi';
    let hasil = (peringatan != '')? input : no_input;
    document.getElementById('hasil').innerHTML = hasil;
}