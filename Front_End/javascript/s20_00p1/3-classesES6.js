//* ======================================================
//*           OOP - Classes and Inheritance (ES6)
//* ======================================================

//? Classes'lar, object (nesne) oluşturmak icin kullanilan sablonlardir.
//? JS'de Class'lar prototipler uzerine insa edilmistir. Ancak, syntax
//? ES5'den farklidir. Aslinda, class keyword'u ilk olarak ES6 da
//? kullanilmistir ancak bu sadece bir syntactical sugar'dir.
//? JavaScript, class-tabanli bir dil degil, prototype-tabanli bir dildir.
//? yaygin kullanim class-tabanli oldugu icin syntax'ini O'na benzetmistir.

//? Bir parent class'in degisken ve fonksiyonelliği extends
//? keyword'u ile child class'a gecmektedir.(INHERITANCE)

class Book {
    constructor(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;

    //?bu alanda yazılan bir metod  VEYA FONKSİYONLAR  bütün insteance lerin belleğinde yer kaplar. hepsinde olur. burası global alnadır.
    this.getTitle = function(){
        return this.title;
    }
    }
    getAge = function () {
        return new Date().getFullYear() - this.year;
      };
    getSummary = function () {
        return `${this.title} was writtten by ${this.author} in ${this.year}`;
    };
}

//! book class ından yeni bir inntance oluşturma
const book1 = new Book("Kaşağı", "Ömer Seyfettin", 1920);
console.log(book1);
console.log(book1.getAge());
console.log(book1.getSummary());

//?sub-class (inheritance) tanımlaması ES6 da nasıl olur ÖRNEK:::
//-----------------------------------------------------

class Magazine extends Book {
    constructor(title, author, year, month){
        //!super diyerek BOOk'un constructor unun çağırdık burada..
        super(title, author, year)//*yapınca book'un prototype iin almış oluyoruz.
        this.month = month;
    }
}


//TODO YENİ İNSTANCE OLUŞTURUYORUZ
const mag1 = new Magazine("pcNet", "Burhan", 2005, "Sep");
console.log(mag1);



