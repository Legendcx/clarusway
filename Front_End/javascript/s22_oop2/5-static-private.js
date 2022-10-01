//* ======================================================
//*        OOP - Static and Private  (ES6)
//* ======================================================

//? Static degiskenler ve metotlar butun bir class'i ilgilendiren
//? verileri tutmak veya degistirmek icin elverislidir.

//? Eger nesnelerden bagimsiz sadece ilgili class' a ait bir degiskene
//? ihtiyac varsa o zaman static degisken kullanmak mantiklidir.

//! Encapsulation OOP'nin temel unsurlarindan birisidir.
//! Bir class icerisindeki degeri/durumu class disindan dogrudan ve
//! izinsiz erisimlere kapatmak icin kullanilir.

//! Encapsulation private degiskenler ve private metotlar yardimiyla yapilir.
//! ES6 ve sornasinda private degisken ve metotlari belirtmek icin
//! # (hash) kullanilir.

//! Private degiskenler dogrudan erisilemezler. Bunlara erismek icin class
//! icerisinde tanimlanan public (genel) erisimli getter ve setter metotlar
//! kullanilir.

//! Private metotlara ise class disirasindan da eriselemez.
//! Private metotlara ancak class icerisindeki diger metotlar ile erisilebilir.

//!encapsulation  verilere kontrollu ulaşabilmedir.


class Book {
    //?private bir deişken oluşturdum.
    #id ;
    //?static değişken tanımlaması. bir static clası oluşturursak sadece o class üzerinde erişilebilir.
    //? intance lerden bağımsız bir metod lazımsa static yapmalıyız.
    static counter= 0;

    constructor(title, author, year) {
      this.author = author;
      this.title = title;
      this.year = year;
      //!constructor içindeede ttanımlama yapabilriz.
      this.#id = "44";
  
  
      this.getTitle = function () {
        return this.title;
      };
      Book.counter++; //* classname.propertyname yazılmalıdır.
    }
    //*class içinde public metotlar yardımıyla private değişkenler okunabilir. bu tip metotlarra getter metot denir.
    getId(){
        return this.#id;
    }
    //! set metodu class içinde olmlaıdır.
    setId(id){
        this.#id = id;

    }
        getSummary() {
            return `${this.title} was writtten by ${this.author} in ${this.#computeAge() - this.year}`;
          }
   

    #computeAge(){
        return new Date().getFullYear() - this.year;
    }

    static
}


const book1 = new Book("Simyacı", "Poelho Coelgo", 1988);
console.log(book1);
// console.log(book1.#id);
//!burası hata verdi. bir class ın içinde olması gerekir diyor.

console.log(book1.getId());


//! #id' must be declared in an enclosing class (at 5-static-private.js:56:6) privite bir değişkenin değeri class dışında doğrudan değiştirilemez. ve okunamaz. yani getter lar ve setter lar yazılan class ın niçinde olmalıdı.
// book1.#id = "11111"


//! private değişkene değer atama 
book1.setId("00000");


//! private değişkeni okumak
console.log(book1.getId());

//!private metotlara class dışından erişilemez.
// console.log(book1.#computeAge);


//! private fonksiyonu çağırdık.
console.log(book1.getSummary());


//***   STATİC PROPERTY   ***/

//! Static değişken class sa yapışan değişken denir. ve bunlara class üzerinden erişilir.

const book2 = new Book("Simyac", "Adem ÖzKAN", 1999);
const book3 = new Book("Simra", "haloo baloo", 1980);

console.log(Book.counter);