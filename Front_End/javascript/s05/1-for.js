//! FOR LOOPS ---->>>>>>>>>>>>

//? FOR, WHİLE, DO WHİLE, For of, For in, (DÖngü Deyimleri)
//?Foreach, map, filter, reduce (iterasyon metodları)

// for (başlangıç; koşul; güncellememiktarı){
//     //Döngü içi
// }  // ? Koşul doğru olduğu sürece döngü devam eder.

// for (let i =6; i<=5; i++){
//     console.log(i); // burada const kullanılmaz çünkü değeri değişiyor.önce komutları bitirir sonra döngünün başına gelince artırımı yapar. koşulda (==) olmaz. çıkılmayan döngü olur.
// }

// for (let i=0; 5; i++){
//     //5 hep true dır. 0,"", NaN, undefined, false. burası hep true olduğu için sonsuz dönngü olur.
// }

//? toplam değişkenlerinde mümkünse (0) , çarpmada (1) kullanınız.
//? sildiğimiz birşey silinmiyor. sadece şuan orada bir şey yok Diyor. buna çöp değer deniyor.

// let n = +prompt("Lütfen bir sayı giriniz");
// let sum1 = 0
// for (let i =1; i <= n; i++) {
//     sum1 += i;
// }
// console.log("SONUC: ", sum1 )


//! NoaH hocanın notları

//? Ornek: 1 den n kadar sayiları toplayan kodu yaziniz.

const n = Number(prompt("Bir sayi girniz:"));

let toplam = 0;
for (let i = 1; i <= n; i++) {
  // toplam = toplam + i;
  toplam += i;
  console.log(toplam, i);
}

console.log("SONUC:", toplam);

//? Ornek: 0-100 Arasinda 10 adet rasgele tamsayi sayi ureten kodu
//? for dongusu ile yaziniz..

for (let i = 1; i <= 10; i++) {
  const rasgele = Math.round(Math.random() * 100);
  console.log(rasgele);
}

//* NOT:
//* Math.floor() =>en yakin alt tamsayiya yuvarlar
//* Math.ceil() =>en yaki ust tamsayiya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.

//? ÖRNEK: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.

const sayi = Number(prompt("Pozitif Bir sayi giriniz:"));
let asal = true;

if (sayi <= 1) {
  alert("Sayi 1'den buyuk olmalidir.");
} else {
  for (let i = 2; i < sayi; i++) {
    if (sayi % i === 0) {
      asal = false;
      break;
    }
  }

  const sonuc = asal === true ? "ASALDIR" : "ASAL DEGILDIR";
  console.log(`${sayi} ${sonuc}`);
}