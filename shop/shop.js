function silme(id) {
    let urunIdleri = JSON.parse(localStorage.getItem("urunIdleri")) || [];
    urunIdleri = urunIdleri.filter(function(urunId) {
        return urunId !== id;
    });
    localStorage.setItem("urunIdleri", JSON.stringify(urunIdleri));

    // Silinen ürünün görünürlüğünü 'none' olarak ayarla
    let silinecekElement = document.querySelector("#deneme" + id);
    if (silinecekElement) {
        silinecekElement.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let urunIdleri = JSON.parse(localStorage.getItem("urunIdleri")) || [];

    urunIdleri.forEach(function(id) {
        let element = document.querySelector("#deneme" + id);
        if (element) {
            element.style.display = "flex";
        }
    });
});


