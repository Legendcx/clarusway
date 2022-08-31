//! array 'in adresi stack 'ta durur. her zaman veriler heap'te tutulur. bu çağırırken daha hızlı olması için. ve belleği en efektif şekilde kullanmaktır. array non-primitive bir veri yapısıdır. 
const myArr = [1, 2.5, "true", "Burhan"]
//? diziler sıralı =ordered'dır. ve zero=index le başlar. 
//! Array constructure yönetimi ile oluşturma 
// const car = new Array("Mercedes", "Fiat", "Toyota", "Ferrari");
// console.log(car);
// console.log(typeof car);

// //! array Literal ile array oluşturma

// const cars = ["Mercedes", "Fiat", "Toyota", "Ferrari"];
// console.log(cars);
// console.log(typeof cars);

// const numbers = new Array (10);
// //! burada 10 tane boş eleman var demektir.

// //! 3. array oluşturma yönetemi
// const veriler = Array.of(1,2,3);
// console.log(veriler);

// //todo Diziden veri okuma(indisleme)
// //-----------------------------------------------
// console.log(cars[2]);
// console.log(cars[cars.length-1]);

// console.log(cars.at(-1));
// //? pozitif ve negatif değer alabilir.

//! 10 elemanlik bos bir Array oluşturdu
const numbers1 = new Array(10);
console.log(numbers1);

// ! 3.Yöntem (Array.of())
const veriler = Array.of(1, 2, 3);
console.log(veriler);

const veri = Array.of(10);
console.log(veri);

//! diziye verii yazma nasıl olur.
const cars = ["Mercedes", "Fiat", "Toyota", "Ferrari"];
cars[1] = "Audi";
console.log(cars);
//? const olmasına rağmen verileri değiştirmemize izin verdi. ama aynı isimle yeni atama yapmamıza izin vermiyor.
//todo son elemanının değerini bir arrtırdık.
const numbers = [1, 2, 3, 4, 5];
numbers[numbers.length-1]++;
console.log(numbers);

const yaslar = [22, 44, 55];
const kisiler = ["ahmet", "Can", 2022-1979, true, yaslar];

console.log(kisiler[kisiler.length-1][yaslar.length-1]++);
console.log(kisiler[kisiler.length-1][0]++);
kisiler[4][1]--;
console.log(kisiler);

const arabalar = ["Mercedes", "Fiat", "Toyota", "Anadolu", "Ferrari"];

//! pop() silme en sondakini  siler.

const silinen = arabalar.pop();
console.log(silinen);

//! push() elemean ekliyor.. ve döndürebilirsiniz eleman sayısını

const n = arabalar.push("Citroen");
console.log(arabalar, n);

//! unshift() dizinin 0. indexsine ekler
const n1 = arabalar.unshift("Porshe");
console.log(arabalar); 

//! shift() metodu baştaki elamanı siler.
const n3 = arabalar.shift();
console.log(arabalar);

//! splice() metodu ... dizinin aralarına ekleme yapıyor.
arabalar.splice(1, 0, "Passat");
// birinci indexe ekle diyoruz. 0 la silme diyoruz kaydırıyoruz.splice(eklenecek indis, 0 ise araya ekleme= 1 ise üzerine yaz, eklenecek value)
console.log(arabalar);

arabalar.splice(3, 1, "Honda");
console.log(arabalar);

//! reverse() komple ters çevirir diziyi
arabalar.reverse();
console.log(arabalar);

//! sort() diziyi alfabetik olarak sıralar. sayıları düzgün sıralamayabilir. içerisine bir kıyaslama fonksiyonu parametre olarak alabilir.
const sayim = [2, 3, 22, 1, 11, 7, 6, 5, 4];
sayim.sort();
console.log(sayim);

sayim.sort((a, b) => a - b);
sayim.sort((a, b) => b - a);

console.log(sayim);

//! fill()
const array1 = [1, 2, 3, 4];
array1.fill(0);
console.log(array1);

//!birinci parametre doldurulacak elemanı yazıyoruz. 2. parametre ise doldurulacak parametre sırasını yazıyoruz.
array1.fill(-1, 1);
console.log(array1);

//------------------------------------------------

//! includes() bir şey var mı diye aratırız. ve true veya false döndürür.
console.log(sayim.includes(5)); // true

//! indexOf(), lastIndexOf():: indis numaralarını döndürü başta veya sonra olacak şekilde index numarasını yazdırır. bir şey bulunamazsa (-1) döndürür.


//! JOIN() dizinin elemanlarını birleştirir ve string yapar.
console.log(sayim.join(" "));
console.log(sayim.join()); // parametre belirtilmezse default olarak (, ) koyar

//! toString() default birleştirme yapıyor ve araya virgül koyuyor.
console.log(sayim.toString());

//! slice(start number, end number) negatif index kullanabilirsiniz. yeni bir kopya yapar.

const car2 = ["Mercedes", "Fiat", "Toyota", "Anadolu", "Ferrari"];
const newCar = car2.slice(2); // bu şu demektir. 2.indisten sonrasını al demektir.

const newCar2 = car2.slice(2,4);

//! concat() dizileri birleştirir. araya önüne arkasına heryere bununla ekleme yapılabilir.

const yazim = ["bugün", "hava", "çok", "güzel"];
const arrayy = [1, 2, 3];
const combine = yazim.concat(arrayy);
console.log(combine);

//! every() bir itereter metodu. tek tek elemanlarını gezer. içine parametre alır ve test eder. sonucunda bir true veya false değer döndürür. koşul belirtiyoruz burada

const yasArray = [18, 22, 34, 15, 78];
const check = yasArray.every((yas) => yas >= 18);
//? bir tanesi bile fonksiyona uygun değilse false döndürür.

check ? console.log("Dizideki herkesin yası 18 den büyük") : console.log("Dizide 18 yaşından küçük var");


//! some() içine yine bir fonsiyon alıyor. true veya false alır.

const buyuk80 = yasArray.some((yas) => yas > 80);
console.log(buyuk80);

//! find() bir test gerşçekleştiriyor. koşulu sağlayan ilk dizi elemanını döndürüyor. eğer bir şey yoksa undefined döndürür.
// yaşı 30 dan büyük olan ilk indisi döndürün
let indis = yasArray.find( (yas) => yas >= 30);
console.log(indis);

const names = ["Ahmet", "Can", "Mustafa", "Merve", "Can"];

//! eğer findLast() dersek koşulu sağlayan son indisi bize döndürür.

const indexBul = yasArray.findIndex((yas) => yas >= 30);
console.log(indexBul);

//! lastIndex( içinde aranan eleamn uoksa (-1) değerini return eder.)
//! Odev: prompt ile konsoldan bir sayi istenmeli (string veya number
//! olarak) eger bu girilen sayi, dizi icerisinde bulunuyorsa indisi
//! (string ve number olarak ayri) yazdirilmalidir. Eger bulunamadiysa
//! Aranilan bulunamamistir yazidirilmalidir.
//!-----------------------------------------------------------

const numberB = [1, "bir", 2, "2", "iki", 3, "üç", 4, "dört", 5, "beş", 6, "altı", 7, "yedi", 8, "sekiz", 9, "dokuz"]

let sayiGir = prompt("Enter a figure(write or number").toLowerCase();

if (numberB.includes(sayiGir)) {
  console.log(numberB.indexOf(sayiGir));
 } else if (sayiGir === Number(sayiGir)) {
   console.log(numberB.indexOf(sayiGir));
} else {
  console.log("Aranılan bulunamamıştır.");

}
