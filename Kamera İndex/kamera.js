function urunEkle(id) {
    
    let urunIdleri = JSON.parse(localStorage.getItem("urunIdleri")) || [];

 
    if (!urunIdleri.includes(id)) {
        urunIdleri.push(id);
    }

    
    localStorage.setItem("urunIdleri", JSON.stringify(urunIdleri));
    console.log(urunIdleri)
    window.location.href = "/shop/shop.html";

}