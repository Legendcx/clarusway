console.log("###### Burhan FUNCTİON #######");

// ageWriter(); 
//! Fonksiyon çağırma işlemini fonksiyonun üstünde veya altında olabilir. ikiside çalışır.
// function ageWriter() {
//     console.log(`Benim adım Mehmet ve ben ${2022 - 1979} yaşındayım.`)
// }


// yazdir();
// function yazdir (){
//     console.log("Merhaba");
// }
// yazdir();
//?---------------------------------------------

//! Brada fonksiyonumu biraz daha işlevsel hale getirdik.

// function ageWriter(name, birthDay) {
//     console.log(`Benim adım ${name} ve ben ${2022 -birthDay}`);
// }

// ageWriter("Burhan", 1979);

// function selamlama(ad, soyAd="") {
//     console.log(`Merhaba ${ad} ${soyAd}`);
// }
// selamlama("Can", "Yılmaz");
// selamlama("Canan", "Öztürk");
// selamlama("Ayşe"); // ? undefined oldu. çünkü tanımlandı ama değer atanmadı. boş.
 //! default parametre atama yapılabilir.
 //! soyAd için default değer atadık.






//! Burada ise biraz daha iyi oldu fonksiyonumuz.
// function ageWriter(ad, birthDay) {
//     const age = 2022 - birthDay;
//     console.log(`Benim ${ad} ve ben ${age} yaşındayım.`)
//     return age;
// }

// const ageBurhan = ageWriter("Burhan", 1979);


// function yasHesapla(isim, dogumTarihi) {
//     const sonuc =`${isim} 'ın yaşı ${2022-dogumTarihi}'dir.`;
//     return sonuc;
// }

// const mesaj1 =yasHesapla("Elif Can", 1979);
// console.log(mesaj1);


//! new Date yazılabilir. yıl için iyi olur
// function yasHesapla(isim, dogumTarihi) {
//     const sonuc =`${isim} 'ın yaşı ${new Date().getFullYear()-dogumTarihi}'dir.`;
//     return sonuc;
// }

// const mesaj1 =yasHesapla("Elif Can", 1979);
// console.log(mesaj1);

// function yasHesapla(isim, dogumTarihi) {
//     // const sonuc =`${isim} 'ın yaşı ${new Date().getFullYear()-dogumTarihi}'dir.`;
//     return `${isim} 'ın yaşı ${new Date().getFullYear()- dogumTarihi}'dir.`;
// }

// const mesaj1 =yasHesapla("Elif Can", 1979);
//!değişkene aktarmanın yararı ilerleyen yerlerde kullanmak istersek bu yöntem daha faydalıdır.
// console.log(mesaj1);

// console.log(yasHesapla("Veli", 1979));


//! Dört işlem hesap makinesi yapalım Fonksiyonla yapınız.

// function tekcift(sayi){
//     return sayi % 2 ? "TEK" : "ÇİFT";
//     //? sayi %2 = bzize true veya false değer verir. harika bir özellik
// }

// console.log(tekcift(5));
// console.log(tekcift(2));



// function tekcift(sayi){
//     return sayi % 2 ? `${sayi} TEK-tir` : `${sayi} ÇİFT-tir`;
//     //? sayi %2 = bzize true veya false değer verir. harika bir özellik
// }

// console.log(tekcift(5));
// console.log(tekcift(2));





// function tekcift(sayi){
//     return sayi % 2 ? `${sayi} TEK-tir` : `${sayi} ÇİFT-tir`;
//     //? sayi %2 = bzize true veya false değer verir. harika bir özellik
// }

// console.log(tekcift(5));
// console.log(tekcift(2));

// const sayi = +prompt("bir sayı giriniz: ");
// console.log(tekcift(sayi));
//! buraya n yazarsak yine değişir. buradan biz değişkenin kendisini göndermiyoruz. onun value sini gönderiyoruz. isimler farklı olabilr.



//?FONKSİYON TANIMLAMA . YÖNTEM (EXPRESSİON)

//! fonksiyonun ismi yok değerin ismi var. Modern js ile gelmiş bir yöntemdir.Önce tanımlıyoruz sonra çağırıyoruz.

// const hesapla = function(n1,n2) {
//     return n1 + n2;
// }

// console.log(hesapla(3,5));


//todo function expression yöntemi ile tanımlama yapıldı. 

// console.log(tekMi(9));
//! expression yönteminde önce declaration yazılmalıdır.
// const tekMi = function(sayi) {
//     return sayi % 2 ? `${sayi} TEK-tir` : `${sayi} ÇİFT-tir`;
// }

// console.log(tekMi(5));
// console.log(tekMi(2));


// //todo üç sayının en büyüğünü bulma

// const buyukBul = function(n1,n2,n3 = -Number.MAX_VALUE) {
//     let enBuyuk;
//     if (n1 >= n2 && n1 >= n3) {
//         enBuyuk= n1;
//       } else if (n2 >= n1 && n2 >= n3) {
//         enBuyuk = n2;
//       } else if (n3 >= n1 && n3 >= n2) {
//         enBuyuk = n3;
//       }
// return enBuyuk;
// }



// const n1 = +prompt("Sayi1:");
// const n2 = +prompt("Sayi2:");
// const n3 = +prompt("Sayi3:");

// console.log(`girilen sayıların en büyüğü ${n1,n2,n3}`);

//* 1.Yontem
// if (n1 >= n2 && n1 >= n3) {
//   console.log(`${n1} en buyuk sayidir`);
// } else if (n2 >= n1 && n2 >= n3) {
//   console.log(`${n2} en buyuk sayidir`);
// } else if (n3 >= n1 && n3 >= n2) {
//   console.log(`${n3} en buyuk sayidir`);
// }

//! ÖDEV-2 bir fonksiyon içinde başka bir fonksiyon çağrılabilir mi?
// hesapla = topla, çıkarma, çarpma, 


const hesapla = function(sayi1, sayi2, islem) {
    let sonuc = 0;
    switch (islem) {
        case "+":
        sonuc = topla(sayi1,sayi2);
        //! sonunc yerine return yaparsak return topla(sayi1, sayi2); dersek break a gerk yoktur. return fonksiyonu bitirir ve çıktı verir. her zaman return en sonda olur.
        break;
        case "-":
        sonuc = cikar(sayi1,sayi2);
        break;
        case "*":
        sonuc = carp(sayi1, sayi2);
        break;
        case "/":
        sonuc = bol(sayi1, sayi2);
        break;
        default:
            break;
    }
    return sonuc;
}


const topla = function (sayi1, sayi2) {
    return sayi1 + sayi2;
}

const cikar = function (sayi1, sayi2) {
    return sayi1 - sayi2;
}

const carp = function (sayi1, sayi2) {
    return sayi1 * sayi2;
}

const bol = function (sayi1, sayi2) {
    return sayi1 / sayi2;
}

console.log(hesapla(5,6, "/"));