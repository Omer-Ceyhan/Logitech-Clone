const İmg = document.getElementById('mouse-item-img-1')
        const İmg1 = document.getElementById('mouse-item-img-1-dblock')
        const İmg2 = document.getElementById('mouse-item-img-2-dblock')

        const btn = document.querySelector('.btn-mouse-1')
        const deneme = document.querySelector('.deneme')
        const change = document.getElementById("changeDisplay")

        const İmg2_1 = document.getElementById('mouse-2')
        const İmg2_2 = document.getElementById('mouse-2-img')
        const İmg2_3 = document.getElementById('mouse-2-img-2')

        const İmg3_1 = document.getElementById('mouse-3-img')
        const İmg3_2 = document.getElementById('mouse-3-img-1')
        

            function fotoEkleme() {
                İmg.style.display = 'none'
                İmg1.style.display = 'block'
                İmg2.style.display = 'none'
                
              }
              function fotoEkleme2() { 
                İmg1.style.display = 'none'
                İmg2.style.display = 'block'
                İmg.style.display = 'none'
               }
               function fotoEkleme3() {
                İmg1.style.display = 'none'
                İmg2.style.display = 'none'
                İmg.style.display = 'block'

                


                 }

                 function fotoekleme2_black() {
                    İmg2_1.style.display = 'block'
                    İmg2_2.style.display = 'none'
                    İmg2_3.style.display = 'none'
                   }
                   function fotoekleme2_white() {
                    İmg2_1.style.display = 'none'
                    İmg2_2.style.display = 'none'
                    İmg2_3.style.display = 'block'
                     }

                     function fotoekleme2_blue() {
                    İmg2_1.style.display = 'none'
                    İmg2_2.style.display = 'block'
                    İmg2_3.style.display = 'none'
                     }
                    
                     function fotoekleme3_black() {
                        İmg3_1.style.display = 'block'
                        İmg3_2.style.display = 'none'
                       }
                       function fotoekleme3_white() {
                        İmg3_1.style.display = 'none'
                        İmg3_2.style.display = 'block'
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
                 
        