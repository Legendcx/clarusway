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

let n = +prompt("Lütfen bir sayı giriniz");
let sum1 = 0
for (let i =1; i <= n; i++) {
    sum1 += i;
}
console.log("SONUC: ", sum1 )