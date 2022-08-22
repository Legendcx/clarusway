//! ******* ARROW  **********

// syntax'ı 
// const topla = (num1, num2) => num1 + num2;
// console.log(topla(2,5));

// const usAl = (t, u) => t ** u;
// console.log(usAl(2,3));

// const hesapla = (x, y, islem) => {
//     if (islem === "+")
//     retun
// }
//? süslü paratez kullanıyorsak return kullanmak zorundayız.For, else bir ifadedir.

//! ÖRNEK ***********************
//Silindirin hacmini hesaplama

// const r = Number(prompt("Yarıçap giriniz"));
// const h = Number(prompt("Yüksekliği giriniz"));

// const hacimHesapla = (r,h) => Math.PI * r * r * h;
// console.log(`${r}, ${h} => Hacmi: ${hacimHesapla(r,h).toFixed(2)}`);

//! ÖRNEK -2 YAŞ HESAPLA //////
// const tarih = Number(prompt("Doğm tarihini giriniz"));

// const yasHesapla = () => {
    
//     const yas = new Date().getFullYear() - tarih;
//     return yas;
// }

// console.log(`Yaşınız: ${yasHesapla(tarih)}`);


//! expression yöntemi ile yapma
//! önce değişken tannımlanır sonra çağrılır. yoksa hata alırız.

// const yasHesapla2 = function(tarih) {
//     const yas = new Date().getFullYear() - tarih;
//     return yas;
// }

// console.log(`Yaşınız: ${yasHesapla2(tarih)}`);


//!Normal Yöntemle de yapıyoruz.

// function yasHesapla3 (tarih) {
//     const yas = new Date().getFullYear() - tarih;
//     return yas;
// }
// console.log(`Yaşınız: ${yasHesapla3(tarih)}`);


//*? ALTERNATİF yÖNTEM
// const tarih = Number(prompt("Doğm tarihini giriniz"));

// const yasHesaplaKisa = (tarih) => new Date().getFullYear() - tarih;
// console.log(`Yaşınız: ${yasHesaplaKisa(tarih)}`);


//todo ====\ FİBONACCİ FORMÜLÜ SORU ÇÖZÜMÜ /=====

//* ORNEK: Girilen n. terim kadar Fibonacci sayilarinin toplamini
//* hesaplayarak yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  0, 1, 1, 2, 3, 5, 8, 13, 21, ...
// f(6) = f(5) + f(4)
// f(n) = f(n-1) + f(n-2)
// let stringResult = "1,1";
// const fibo = (n) => {
//     let fib1 = 1;
//     let fib2 = 1;
//     let toplam = 0;

//     for (let i =2; i<n; i++) {
//         toplam = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = toplam;
//         stringResult += "," + fib2;
//     }
//     return fib2;
// }
// const n = Number(prompt("n terimini giriniz"));
// if (n<=0) {
//     console.log("Lütfen 0 dan büyük bir sayı giriniz");
// } else {
// console.log(`FIBO(${n})=${fibo(n)}`);
// console.log(stringResult)
// }



//! RECURSİON  DÖNGÜLERİ  FONKSİYONLARI

// const fibo = (n) => {
//     if(n<= 0) {
//         return 0;
//     } else if (n === 1 || n === 2) {
//         return 1;
//     } else {
//         return fibo(n-1) + fibo(n-2);
//     }
// };
// //? yazılması zor olan fonksiyonları kolay yazmak için , ama biraz daha programı yorar. Dikkatli kullanmak lazım bunları 

//! kendi kendi kendini çağıran fonksiyondur. kod yazımını kısaltır ama yorar.

// const n = +prompt("n terimini giriniz");

//     console.log("0 dan büyük değer giriniz.");
//     console.log(`FIBO(${n})=${fibo(n)}`);


//! ÖÖÖDDDEEEEVVVV       FAKTÖRYEL HESABINI iki yoldan yapınız. Recursion ve arrowlarla yapınız.
