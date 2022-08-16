"use scrict"

// * ===============================================
// *                  KARAR YAPILARI
// * ===============================================

//**************** IF-ELSE *******************

console.log("****** CONDITIONS *******");

//? ÖRNEK-1 Console de girilen bir sayının pozitif veya negatif olduğunu yazalım

// const sayi = +prompt("Enter a number");
// if (sayi > 0) {
//     console.log(`${sayi} sayısı pozitiftir.`);
// } else if (sayi === 0) {
//     console.log(`${sayi} sayısı sıfıra eşittir.`);
// } else {
//     console.log(`${sayi} sayısı negatiftir.`);
// }

//? ÖRNEK2: console'dan 3 tam sayı isteyiniz ve en büüyüğü yazdırınız:

// const sayi1 = +prompt("Enter a number");
// const sayi2 = +prompt("Enter a number");
// const sayi3 = +prompt("Enter a number");

// if (sayi1 >= sayi2 && sayi1 >= sayi3) {
//     console.log(`${sayi1} sayısı en büyük sayıdır.`);
// } else if (sayi2 >= sayi1 && sayi2 >= sayi3){
//     console.log(`${sayi2} sayısı en büyük sayıdır.`);
// }else {
//     console.log(`${sayi3} sayısı en büyük sayıdır.`);
// }

//* 2.Yöntem

// let enBuyuk = sayi1;

// if(sayi2 >=enBuyuk) {
//     enBuyuk = sayi2;
// } if (sayi3 >= enBuyuk) {
//     enBuyuk = sayi3;
// }
// console.log(`${enBuyuk} en büyüktür.`);

// ÖDEV 1... ---->>> 4 İŞLEM HESAP MAKİNESİ




// const yas = 20;
// const cinsiyet = "erkek";
// const saglikli = true;

// const kosul = yas>=18 && cinsiyet =="erkek" && saglikli;
// //! bu yöntem shorthand yöntemidir.
// if (kosul) {
//     console.log("Askerlik yapmalı");
// } else {
//     console.log("Askerlik Yapması Gerekmez");
// }

//todo =====>>>> SWİTCH-CASE YAPISI <<<<<=====
//? karar mekanızması olarak kullanılan bir diğer deyimdir. koşul saısı 4'ten fazla olduğunda kullanılması gerekir.
//? case ler eşitlik durumunu yazabiliriz.


// switch(koşul değişken){
//     case değeri1;ifade1; break;
//     case değeri2; ifade 2;break;

//     ...

//     default:
//         ifade n;

// }

 /// örnek
//  const gun = +prompt("Gün :");

//  switch (gun) {
//     case 1:
//         gun = "pazartesi";
//         break;
//     case 2:
//         gun = "salı";
//         break;
//     case 3:
//         gun = "çarşamba";
//         break;
//     case 4:
//         gun = "perşembe";
//         break;
//     case 5:
//         gun = "cuma";
//         break;
//     default:
//         break;
//  }
//  console.log(`Girilen gün ${gun}`);

 //! TERNARY YAPISI ***************

 //todo koşul 2 den fazla ise bunu kullanmak iyi değildir.

 //? ÖRNEK5 : Kalan - Geçti

//  const notum = +prompt("Notunuzu giriniz:");

//  let sonuc = notum >= 50 ? "Geçti" : "Kaldı";
// console.log(sonuc);

//  console.log(notum >= 50 ? "Geçti : "Kaldı");

//? ÖDEV-3 :  Maaşı asgariücrreten düşükse %50 zam alsın, büyükse %10 zam yapmak istiyoruz. maaşı alacağız ve zam yaptıracağız ternary ile 
//! let maas = 5000;
//! maas = maaş * 1.5;

//todo CEVAP-3:

// const salary1 = +prompt("Enter your salary:");
// const minSalary = 5500;
// let newSalary = salary1 > minSalary ? salary1*1.1 : salary1* 1.5;
// console.log(`New salary ${newSalary}₺'dir.`);


//? ÖDEV-4 : Gelir - Gider miktarını alacagız asgari ücret kadar ise kredi alabilir. fazla ise kredi alamaz.

//todo CEVAP-4:

const income = +prompt("Enter your income");
const expense = +prompt("enter your expense");

const minSalary = 5500;


// you can get a loan


// * ===============================================
// *     NOAH HOCA'nın BÖLÜMÜ () KARAR YAPILARI)
// * ===============================================

//**************** IF-ELSE *******************

console.log("****** CONDITIONS *******");

//? ORNEK1: Console'dan girilen bir sayisinin pozitif,negatif
//? yada 0 oldugunu tespit ederek yazdiriniz.

const sayi = Number(prompt("Bir sayi giriniz:"));
if (sayi > 0) {
  console.log(`${sayi} pozitiftir.`);
} else if (sayi == 0) {
  console.log(`${sayi}'a esittir.`);
} else {
  console.log(`${sayi} negatiftir.`);
}
console.log(sayi, typeof sayi);

//? ORNEK2: console'dan 3 tamsayi alarak bunlarin en buyugunu
//? yazdiriniz.
const n1 = +prompt("Sayi1:");
const n2 = +prompt("Sayi2:");
const n3 = +prompt("Sayi3:");

//* 1.Yontem
if (n1 >= n2 && n1 >= n3) {
  console.log(`${n1} en buyuk sayidir`);
} else if (n2 >= n1 && n2 >= n3) {
  console.log(`${n2} en buyuk sayidir`);
} else if (n3 >= n1 && n3 >= n2) {
  console.log(`${n3} en buyuk sayidir`);
}

//* 2.Yontem
let enBuyuk = n1;

if (n2 >= enBuyuk) {
  enBuyuk = n2;
}
if (n3 >= enBuyuk) {
  enBuyuk = n3;
}
console.log(`${enBuyuk} en buyuktur`);



//! ODEV1: Dort Islem Hesap Makinasi

//**************** SWITCH-CASE *******************

//! ODEV2
//! Clarusway’deki haftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız.

//! Program
//! Pazartesi, Salı ,Çarşamba, Perşembe -> InClass
//! Cuma -> Teamwork
//! Cumartesi ->  InClass + Workshop
//! Pazar -> Self-Study
//! Aksi takdirde -> Yanlis gun girildi.

//**************** TERNARY *******************

//? ORNEK5: Kaldi-Gecti
const not = +prompt("Notunuzu giriniz:");
// let sonuc = not >= 50 ? "Gecti" : "Kaldi";
// console.log(sonuc);
console.log(not >= 50 ? "Gecti" : "Kaldi");

//? ORNEK6:
const yas = 17;
const cinsiyet = "erkek";
const saglikli = false;

yas >= 18 && cinsiyet === "erkek" && saglikli
  ? console.log("askerlik yapmali")
  : console.log("Askerlik yapmasina gerek yok");

//! ODEV3:Maasi asgari ucretten az olanlara %50 zam,
//! fazla olanlara ise %10 zam yapmak istiyoruz.

//* let maas = 5000;
//* maas = maas * 1.5

//! ODEV4: Console’dan kişinin gelir ve gider miktarını alan
//! eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir 🤑
//! değilse  Kredi Verilemez 🥺
//! şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.




