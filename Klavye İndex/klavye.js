const btnWhite = document.getElementsByClassName('klavye-img')[0];
const btnDark = document.getElementsByClassName('klavye-img-2')[0];
const btnDark2 = document.getElementsByClassName('klavye-img-3')[0];
// Sayfadaki 'klavye-img-4' sınıfına sahip ilk öğeyi seç
const btnWhite2 = document.getElementsByClassName('klavye-img-4')[0];
// Sayfadaki 'klavye-img-5' sınıfına sahip ilk öğeyi seç
const btnPink = document.getElementsByClassName('klavye-img-5')[0];


function WhiteMod() {
    
    btnWhite.style.display = 'block';
    btnDark.style.display = 'none';
}

function DarkMod() {
    
    btnWhite.style.display = 'none';
    btnDark.style.display = 'block';
}






function DarkMod2() {  
    btnDark2.style.display = 'block';
    btnWhite2.style.display = 'none';
    btnPink.style.display = 'none';
}

// Beyaz modu etkinleştiren fonksiyon
function WhiteMod2() {  
    btnDark2.style.display = 'none';
    btnWhite2.style.display = 'block';
    btnPink.style.display = 'none';
}

// Pembe modu etkinleştiren fonksiyon
function PinkMod() {  
    btnDark2.style.display = 'none';
    btnWhite2.style.display = 'none';
    btnPink.style.display = 'block';
}


function urunEkle(id) {
    
    let urunIdleri = JSON.parse(localStorage.getItem("urunIdleri")) || [];

 
    if (!urunIdleri.includes(id)) {
        urunIdleri.push(id);
    }

    
    localStorage.setItem("urunIdleri", JSON.stringify(urunIdleri));
    console.log(urunIdleri)
    window.location.href = "/shop/shop.html";

}