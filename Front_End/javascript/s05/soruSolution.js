//! 1- 1 ile 10 arasındaki ÇİFT sayıları ekrana javascript kodları

// for (let i = 0; i <= 10; i++) {
//     if ( i % 2 == 0) {
//         console.log(i);
//     }
// }

//! Ekrana büyüyen font ile TÜRKİYE yazan javascript kodları

// for (let i = 0; i < 10; i++) {
//     document.write("<span style='font-size:" + i + 5 + "px;'>TÜRKİYE</span><br/>");
    
// }

//! 3 ve 5’e tam bölünen sayıları ve bu sayıların toplamını yazdıran javascript kodları

// let total=0;
// for (let i = 1; i <= 100; i++) {
//     if ( i % 3 === 0 && i % 5 === 0) {
//         total += i;
//     }
    
// }
// console.log(total);

// ! * ** ***  şeklinde yıldızları yazdıran javascript kodları

// for (let i = 0; i < 10; i++) {
//     for (let x =0; x <i; x++) {
//         document.write("*");
//     }
//     document.write("<br/>");
// }

//! Kullanıcının girdiği mesajı yine kullanıcının girdiği tekrar sayısı kadar yazdıran javascript kodları


// let mesaj = prompt("Mesaj Girin");
// let tekrarSayisi = +prompt("Tekrar sayısını girin");
// for (let i = 0; i < tekrarSayisi; i++) {
//     console.log(mesaj);
// }


//! 10’dan 1’e doğru geri geri sayıları yazdıran javascript kodları

// for (let i = 10; i >=0; i--) {
//     console.log(i);
// }

//!1’ler çarpım tablosunu ekrana yazdıran javascript kodları

// for (let i = 1; i <= 10; i++) {
//     console.log(`1 x ${i} = ${1 * i}`);
// }

//! *** ** * şeklinde yıldızları azalarak yazdıran javascript kodları

// for (let i = 10; i >=1; i--) {
//     for (let b =0; b < 1; b++) {
//         console.log("*")
//     }
//     console.log(" ")
// }

// i = 0;
// while(i<10) {
//     console.log(i);
//     i++;
// }

// i = 50;
// do {
//     console.log(i);
//     i++;
// } while(i<=60);

// i = 10;

// while(true) {
//     if (i < 0) {
//         break;
//     }
//     console.log(i);
//     i--;
// }


//todo FONKSİYON TANIMLAMA  ########

// const yasHesapla = (birtDay) => 2022 - birtDay;
// // alert(yasHesapla(1979));
// console.log(yasHesapla(1979));

// const usAl = (taban, üs) => taban ** üs;
// console.log(usAl(2,5));

// const tekMi = (x) => x % 2 ? "TEK" : "ÇİFT";
//     console.log(tekMi(14));

//     const summ = (a,b) => {
//         const sonuc = a + b;
//         return sonuc;
//     }

// console.log(summ(5,9));

// ---------------------------------------

// const yaricap = +prompt("Lütfen yarıçapı giriniz.");

// yariCapHesapla = () => {
//     const sonucum = (yaricap * yaricap * 3.14);
//     return sonucum;
// }


// console.log(yariCapHesapla());



// const yaricap = +prompt("Lütfen yarıçapı giriniz.");
// yariCapHesapla = () => {
//     return yaricap * yaricap * 3.14;
    
// }

// console.log(yariCapHesapla());

// let num1, num2, adet, counter;
// num1=0;
// num2 = 1;
// adet = +prompt("Kaç tane fibonacci sayısı istiyorsunuz");
// counter =1;

// do{
//     console.log(`${counter}'ncı fibonacci ${num2}`);
//     let total = num1 + num2;
//     num1 = num2;
//     num2 =total;
//     counter += 1;
// } while(counter <=adet);






