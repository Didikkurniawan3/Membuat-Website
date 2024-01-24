document.addEventListener("DOMContentLoaded", function() {
    var kalimat = "Daerah Istimewa Yogyakarta adalah hasil peleburan Kesultanan Yogyakarta dan Kadipaten Pakualaman di Indonesia.";
    var container = document.getElementById("kalimat");

    var words = kalimat.split(" ");
    words.forEach(function(word, index) {
        setTimeout(function() {
            container.innerHTML += word + " ";
        }, index * 500); // Setiap kata ditampilkan setelah 500 milidetik
    });
});
