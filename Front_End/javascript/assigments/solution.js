// ! cevap-1

// let notB;
// let totalB = 0;
// let sayacB = 0;

// while(true){
//     notB = prompt("Lütfen 0-100 not giriniz, çıkmak için (q/Q) basınız.").toLowerCase();
//     if (notB === "q") {
//         break;
//     } else if (Number(notB) >= 0 && Number(notB) <= 100){
//         totalB += +(notB);
//         sayacB++;
//     } else {
//         console.log("Lütfen 0-100 arasında bir not giriniz.");
//     }
    
// }

// let sonucB = totalB / sayacB;
// console.log(`Girilen notların ortalaması: ${Math.round(sonucB)}`); // toFixed kullanılabilir.


// ! cevap-2

let hak = 5;
const rastgele = Math.round(Math.random() * 100);
console.log(rastgele);
let tahmin;
let yeniden = true;

while(yeniden){
do {
tahmin = Number(prompt("Lutfen 0-100 arasinda bir tahmin giriniz:"));
hak -= 1;
if (tahmin === rastgele) {
console.log(`Tebrikler ${5 - hak} kerede bildiniz.`);
break;
} else if (tahmin < rastgele) {
console.log("ARTTIR ⬆️");
} else {
console.log("AZALT ⬇️");
}
} while (hak > 0);

if (tahmin !== rastgele) {
console.log("Uzgunuz oyunu kaybettiniz 😔😔");
}

let secmek = prompt("Tekrar oynamak ister misiniz?(E/H)").toLowerCase();
if (secmek === "e"){
    yeniden = true;
    hak = 5;
} else if (secmek === "h") {
    yeniden = false;
}
}

// let min = 10, max = 50;
// let rastgele = min + Math.random() * (max-min);
// console.log(rastgele.toFixed());
    




// Klavyeden Q veya q karakteri girilene kadar not girişi yapan ve bu karakterlerden birisi girildiğinde O ana kadar girilen tüm notların ortalamasını hesaplayarak konsola ortalamayı bastıran uygulamayı yazınız.

//! cevap-1

// let num1;
// let sayac=0;
// let total = 0;

// while (true){  
//     //? string bir değer girileceği için sayıya çevirmedik burada.
//     num1 = prompt("Not girişi yapınız ve çıkmak çin < Q-q > harfine basınız").toLowerCase(); 
//     if (num1 == "q"){
//         break;
//     }
//     total += +(num1);
//     sayac++;
// }

// let sonuc = total / sayac;
// console.log(`girilen notların ortalaması:  ${sonuc}`);







