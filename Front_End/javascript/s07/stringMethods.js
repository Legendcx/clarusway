console.log("****string METHODLARI");

//! Klasik yöntem (String Literals) ile string tanımlanırsa bu string primitive string denir.(boolean, string, null, undefined, Number, symbol=primitive'dir.) NonPrimitive = Object
//? primitive de bir değer vardır. ama object lerde bir sürü değer alır ve değer üretir.

// const str1 = "Clarusway";

// const str2 = "Hello";

// const str3 = "Full stack";

//todo birincinin kullanımı kolay ve az bellek kaplar.
//todo java primitiveleri non primitive çeviriyor. bunu yapan (.)'dır. java otomatik bir wrapper sayesinde çeviriyor. objece ye çeviriyor.

//! Non Primitive string oluşturma


//? stringleri (+) ile birleşştirebiliriz.

// const str4 = new String("Hello FS");
// const sayi = 5;
// const str5 = str1 + str2 + str3 + sayi;
// console.log(str5);

// // !  CONCAT() -- immutable:değiştirilemez  ------
// // ? bir class a ait fonksiyonlara method denir.

// // // stringleri birleştirme
// const str1 = "Clarusway";

// const str2 = "Hello";

// const str3 = "Full stack";

// console.log(str1.concat(srt3));

// ? Uppercase -- LoverCase   
// const myName = "Noah Adams";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

// let yourName = "ismet";
// // yourName = yourName.toUpperCase();
// yourName = yourName.toLocaleUpperCase("tr");
// console.log(yourName);

// let myName = "Burhan YİĞİTER";
// console.log(myName.toLocaleUpperCase());

// let youName = "ismet";
// yourName = youName.toLocaleUpperCase();
// toLocalUpperCase istediğiniz dile göre çeviriyor.

//! Javascript te iki stringle eşit mi diye kıyaslayan bir fonksiyon yazınız.

// const esitmi = (str1, str2) => {
//     return str1.toLocaleUpperCase() === str2.toLocaleUpperCase() ? `${str1} ile ${str2} eşittir.` : `${str1} ile ${str2} eşit değildir.`;

// }

// console.log(esitmi("Merhaba", "Merhaba"));
// console.log(esitmi("Merhaba", "Hello"));

// const esitmi = (str1, str2) => 
//     str1.toLocaleUpperCase() === str2.toLocaleUpperCase() ? `${str1} ile ${str2} eşittir.` : `${str1} ile ${str2} eşit değildir.`;


// console.log(esitmi("Merhaba", "Merhaba"));

//! LocaleCompare() Metodu

//? iki tane stringi kıyaslıyor ve pozitif, negatif ve 0 döndürüyor.
//? 0= iki string eşittir. 


// const a = 'réservé'; // with accents, lowercase
// const b = 'RESERVE'; // no accents, uppercase

// console.log(a.localeCompare(b));
// // expected output: 1
// console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
//! a ile b yi kıyasla ama 'en' göre kıyasla. hassasiyete göre(base) küçük büyük harfe duyarlı değil. (case = modu hassastır.)


//! charAt() = indis sıra numarası= 0 dan başlar. UNUTMA!!!
//! parametre verilmezse ilk indisi döndürür.
//! length = stringin properties dir. objenin değişkenidir. stringin karakter sayısını tıtar.
// const str6 = "Full Stack Path";
// console.log(str6.charAt(3)); // l döner.
// console.log(str6.charAt());
// console.log(str6.length);

// console.log(str6.charAt(str6.length-1));

//! include() içerir mi demektir? (true | false değer üretir.)
// const word = " To be or not to be";

// console.log(word.includes('to be'));
// console.log(word.includes('')); // true çıkar.çünkü derleyiciler stringler, belleğe saklarken 't'%'o' böyle saklar. karakterden null karakteri ekler.o yüzden true verir sonuc.

// console.log(word.includes('to be', 14));
//! indis numarası verip istediğimiz yerden başlatabiliriz.
// yine büyük-küçük harfe çevirebiliriz.

//----------------------------------------------------------------

//! indexOf(), lastIndexOf(), case sensitive

// aradığınız kelimenin indexsini döndürüyor

// const toBe = word.indexOf("or");
// console.log(toBe);
// console.log(str6);

// const be = word.indexOf("BE");
// const ben = word.indexOf("be");
// console.log(be);
// console.log(ImageBitmapRenderingContext);
//! her hangi bir harf bulunamadı ise -1 döndürür. çünkü indisler - değer almaz.

// ! search() ---------------------
//? regular expression arama paterni sunuyor. (\g\) iki slash arası arama yapabiliyoruz. white karakter (regex = /[^\w\s]/g karakterler bunlar koşul koyuyyor.

// const word = " To be or not to be";

let  str10= "hey judE";
const re = /[A-Z]/;
const reDot =/[.]/;
console.log(str10.search(re));
console.log(str10.search(reDot));

// ! startsWith(), endsWith()  = true -false döndürür.

let word2 = "Sen gülme güller acar gül pembe";
console.log(new String(word2));
console.log(word2.startsWith("Sen")); // true çıkar . başlangıcı 
console.log(word2.endsWith("pembe")); // true çıkar . sonu budur. 
console.log(word2.endsWith("acar", 23)); // false çıkar . sonu budur. 

//!  replace(searchFor, replaceWith) - immutable  

let oku = "Oku baban gibi, saf olma";
console.log(oku.replace("saf olma", "başarılı ol"));
oku = oku.replace("saf olma", "zengin ol");
oku= oku.replace(/ZENGİN/i, "kele");
oku= oku.replace(/ZENGİN/gi, "kele");
//? gi kullanılırsa incase sensitive bir şekilde çevirir.
console.log(oku);

//! replace ilk gördüğü değeri değiştirir.

//! replaceAll() --immutable-----------

let degistir = "dağlar dağlar yol ver gecem";
degistir = degistir.replaceAll("dağlar", "Dağlar");
console.log(degistir);

//?Regex de kullanilabilir.
let degistir2 =
  "No woman, no cry" +
  " No woman, no cry, eh, yeah" +
  " Little darling, don't shed no tears" +
  " No woman, no cry, eh";

console.log(degistir2.replaceAll(/no/gi, "Hayir"));


//---------------------------------------------------

//? slice(beginIndex, endIndex)
//? substring(beginIndex, endIndex)- (negatif index kullanılamaz)

// const burhan = "uzun ince bir yoldayım yürüyorum gündüz gece";

// const sliced = burhan.slice(35);
// console.log(sliced);
// console.log(burhan.slice(17, 30));
// console.log(burhan.slice(-23, -19));


// console.log(burhan.substring(17,30)); // dayım yürüyor

//! split() --- bölme demektir

// const tarkan = "Gel gündüzle gece olalım";
// const splited = tarkan.split(" ");
// console.log(splited); // boşluklardan böldü ve array e çevirdi.

// console.log(typeof splited); // tipi bir object'tir.

// const tarkan = "Gel gündüzle gece olalım";
// const splited = tarkan.split("");
// console.log(splited); // boşluklardan böldü ve harf lere ayırdı. oldu ve array e çevirdi.

// console.log(typeof splited); // tipi bir object'tir.


//* ----------------------------------------------------------
//* trim();
//* ----------------------------------------------------------
// const ramazan = "    Hoş geldin ya şehri Ramazan     ";
// console.log(ramazan);
// console.log(ramazan.length); // 36
// console.log(ramazan.trim());
// console.log(ramazan.trim().length); //27

//! ODEV1: tarkan string'indeki kelimelerin sayisini donduren
//! bir fonksiyon yaziniz.

const tarkan = "Gel git gündüzle gece olalım";

// function kelimeSayisiBul(str) {
//     return str.split(" ").length;
// }

// console.log(kelimeSayisiBul);

// const kelimeBul = function(v) {
//     let matches = v.match(/\S+/g) ;
//     retur

// }
  //!  1.YÖNTEM
// function countWord(tarkan){
//     tarkan = tarkan.replace(/\n/g,' ');
//     return tarkan.split(' ').length;
// }
// console.log(countWord(tarkan));
  //! 2. YÖNTEM
// const calculate = function() {
//     const length = tarkan.split(/[^\s]+/).length-1;
//     return length;
// }
// console.log(calculate(length));
 //! 3.YÖNTEM 
 function countWord(tarkan) {
    return tarkan.trim().split(/\s+/).length;
 }
console.log(countWord(tarkan));

//! 4.YÖNTEM
function wordCounter(tarkan) {
    return tarkan.split(" ").length;
}
console.log(wordCounter(tarkan));


//! ODEV2:
//! ----------------------------------------------------------
// https://www.youtube.com/watch?v=b7vfp5G4brE


