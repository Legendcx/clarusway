//! FOR LOOPS ---Hesaplayınız...
const dizi = [-5, 15, 22, -4, 45, 78];

const topla = (n) => {
  let negatifler = 0;
  let pozitifler = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] < 0) {
      negatifler += n[i];
    } else {
      pozitifler += n[i];
    }
  }
  console.log(`Dizideki Pozitif Sayıların Toplamı: ${pozitifler}`);
  console.log(`Dizideki Pozitif Sayıların Toplamı: ${negatifler}`);
};
topla(dizi);
//!----------------------------------------

// const dizi = [-5, 15, 22, -4, 45, 78];

// const negatifler = [];
// const pozitifler = [];

// const dizelereAyir = (n) => {
  
//   for (let i = 0; i < n.length; i++) {
//     if (n[i] < 0) {
//       negatifler.push(n[i]);
//     } else {
//       pozitifler.push(n[i]);
//     }
//   }
 
// };

// dizelereAyir(dizi);

// console.log(negatifler);
// console.log(pozitifler);

//!--------------------------------------

//? ÖRNEK: Bir dizideki notların ortalamasını hesaplayınız

// const notlar = [55, 77, 23, 89, 100];

// let toplam = 0;

// for (let i = 0; i<notlar.length; i++) {
//     toplam += notlar[i];
// }

// console.log("ORTALAMA: ")


// //! FOR IN DÖNGÜSÜ İLE İTerasYON 

// const sayilar = [55, 77, 23, 89, 100];
// let sonuc =0;
// for(let i = 0; i < notlar.length;)








//*-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------

// const students = [
//   "ahmet",
//   "mehmet",
//   "ismet",
//   "ahmet",
//   "can",
//   "mehmet",
//   "cem",
// ];

// const findStudents = (arr, search) => {
//     let counter = 0;
//     for (let i in arr) {
//         if (search === arr[i]) {
//             counter++;
//         }
//     }

//     if (counter ===0){ // (!counter) eğer yoksa
//         return `${search} can not be found`;
//     }else {
//         return `${search} found ${counter} times`;
//     }
// }
// const name = prompt("Please enter a name").toLowerCase();

// console.log(findStudents(students, name));

//! FOR OF DÖNGÜSÜ ------------------
//? birçok değişken üzerinde çalışabiliyor.

// const students = [
//     "ahmet",
//     "mehmet",
//     "ismet",
//     "ahmet",
//     "can",
//     "mehmet",
//     "cem",
//   ];
  
//   const findStudentsOf = (arr, search) => {
//       let counter = 0;
//       for (let item of arr) {
//           if (search === item) {
//               counter++;
//           }
//       }
  
//       if (counter ===0){ // (!counter) eğer yoksa
//           return `${search} can not be found`;
//       }else {
//           return `${search} found ${counter} times`;
//       }
//   }
//   const studentName = prompt("Please enter a name").toLowerCase();
  
//   console.log(findStudentsOf(students, studentName));


//   const students = [
//     "ahmet",
//     "mehmet",
//     "ismet",
//     "ahmet",
//     "can",
//     "mehmet",
//     "cem",
//   ];
  
//   const findStudentsOf = (arr, search) => {
//       let counter = 0;
//       for (let item of arr) {
//         //  search === item ?  counter++ : null;

//         search === item && counter++;
//         //? short-circuit yöntemi : && => koşul doğru ise ifadeyi çalıştır. demektir. ternary de ikinci koşul yerine null koymak lazımdır.
//           }

  
//       return (!counter) 
//       ? `${search} can not be found` 
//       :`${search} found ${counter} times`;
     
//   }
//   const studentName = prompt("Please enter a name").toLowerCase();
  
//   console.log(findStudentsOf(students, studentName));


  // bir durum varsa short-circuit kullanmak lazım. iki durum varsa ternary kullanmak lazım
  //? 2-3 koşul varsa if kullanmak lazımdır. 



  //!FOREACH METODU ile dizi iterasyonu
  //? minimum 1 max 3 parametre alır.
  //? kullanımı kolaydir. break ve continue kullanılmaz. 
  //? klasik döngülere göre daha yavaş çalışır.

  // let ogrenciler = ["ali", "veli", "Ahmet"];
  // ogrenciler.forEach(yazdir);

  // function yazdir(v){
  //   console.log(v);
  // }
//todo yukarıdaki kodun kısa halidir 
  // ogrenciler.forEach((k)=>console.log(k));

  //?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.

// const fiyatlar = [100, 250, 50, 89];

// fiyatlar.forEach((f) => console.log(f));

//? fiyatların toplamını consola bastırınız

// let sum = 0;
// fiyatlar.forEach((g) => (sum += g))
// console.log("SUM: ", sum);

// void function=  yani bir şey (değer) döndürmeyen function dur. undefined alırız.



//?-------------- ÖRNEK -------------------
//? prices dizisindeki her bir ara toplam degerini
//? konsola bastiriniz. Ayrica her bir fiyata %10 zam yapiniz.

// let total = 0;
// fiyatlar.forEach((price, index, arr) => {
// total += price;
// console.log(`${index+1}.iteration: ${total}`);
// arr[index] = Math.trunc(price * 1.1);
// })

// console.log(fiyatlar)

//* ======================================================
//*                       MAP METHOD
//! yeni bir kopya dizi(array) döndürür. Bir diziyi bozmadan kopyasını oluşturmak için kullanılır.transformasyon veya modifikasyon varsa map() kullanmalıyız.süslü parantez açarsak return etmek zorundayız.
//?-------------- ÖRNEK -------------------
//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.

let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];

const bigNames = names.map((name) => name.toUpperCase());
console.log(bigNames);

//?-------------- ÖRNEK -------------------
//? tlFiyatlar dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

const euro = 18.23;
const dolar = 18.19;
const tlPrices = [100, 150, 100, 50, 80];

const euroPrices = tlPrices.map((tl) => Number((tl / euro).toPrecision(3)));
console.log(euroPrices);

const dolarPrices = tlPrices.map((tl) => Number((tl / dolar).toPrecision(3)));
console.log(dolarPrices);

//?-------------- ÖRNEK -------------------
//? products dizisinin icerisindeki her urunu (Orjinal dizideki)
//? buyuk harf olarak degistirelim.

const products = [
  "Iphone12",
  "samsungS20",
  "lenovo",
  "macbook pro",
  "mac air",
  "Galaxy tablet",
  "macbook",
  "Iphone12",
  "mac air",
  "lenovo",
  "macbook pro",
  "samsungS20",
];
//! Orjinal diziyi degistirdik.
products.map((p, i, arr) => (arr[i] = p.toUpperCase()));
console.log(products);


//* ======================================================

//* ======================================================
//*                CHAINING (PIPELINE)
//* ======================================================

//* ======================================================
//*                 FILTER METHOD

const maaslar = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

//?-------------- ÖRNEK -------------------
//? Maasi 10000'den buyuk olanlari ayri bir diziye saklayalim

const bigThan = maaslar.filter((x) => x > 10000);
console.log(bigThan);

const range = maaslar.filter((x) => x >= 6000 && x <= 10000);
console.log(range);

// ---------------------------
const lessThan9000 = maaslar.filter((x) => x < 9000).map((x) => Math.trunc(x * 1.1));

console.log(lessThan9000);

//--------------------------------------
 maaslar
 .filter((x) => x < 9000)
 .map((x) => Math.trunc(x * 1.1))
 .forEach((x) => console.log(x));

//* ======================================================

//* ======================================================
//*                 REDUCE METHOD
//* ======================================================


