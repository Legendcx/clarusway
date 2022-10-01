//* ======================================================
//*        OOP -  Polymorphism(ES6)
//* ======================================================

//* Polymorphism, bir degisken, fonksiyon veya nesnenin çoklu sekiller
//* alabilmesini tanimlayan bir nesne-yonelimli programlama teknigidir.
//* Polymorphism, genellikle Overloading ve Overriding(üzerine yazma, ezme) gibi alt kavramlar
//* ile bilinir.


// class Book {
//     constructor(title, author, year){
//     this.title = title;
//     this.author = author;
//     this.year = year;

//     //?bu alanda yazılan bir metod bütün insteance lerin belleğinde yer kaplar. hepsinde olur. burası global alnadır.
    
//     this.getTitle = function(){
//         return this.title;
//     }
//     }
//     getAge = function () {
//         return new Date().getFullYear() - this.year;
//       };
//     getSummary = function () {
//         return `${this.title} was writtten by ${this.author} in ${this.year}`;
//     };
// }


// class Magazine extends Book {
//     constructor(title, author, year, month){
//         //!super diyerek BOOk'un constructor unun çağırdık burada..
//         super(title, author, year)
//         this.month = month;
//     }

//     //! overriding =  Metot (Parent class taki bir metodun farklı fonksiyonellikle fakat aynı isimle tanımlanması. herzaman kendisine en yakın olanını class ına yakın olanı kullanır.)
//     getSummary() {
//         return `${this.title} was writtten by ${this.author} in ${this.year} in ${this.month}`;
//     }

//     //! aşağıdaki metodla hem kendi clası içindeki getSummary i kullnadık hem de parent ındaki getSummary yi kullandık.gene super ile çağırıyoruz.
//     getSummaryParent() {
//         return super.getSummary();
//     }

// }

// const mag1 = new Magazine("pcNet", "Burhan", 2005, "Sep");
// console.log(mag1);
// console.log(mag1.getSummaryParent());


//*** NOAH HOCA'NIN NOTLARI */

class Book {
    constructor(title, author, year) {
      this.author = author;
      this.title = title;
      this.year = year;
  
      //? Bu alanda yazilan bir metot butun instance'ların belleginde tek tek yer kaplar.
      this.getTitle = function () {
        return this.title;
      };
    }
  
    //! Bu kisimda yazilan fonksiyonlar aslinda prototype alaninda bulunur.
    getAge() {
      return new Date().getFullYear() - this.year;
    }
    getSummary() {
      return `${this.title} was writtten by ${this.author} in ${this.year}`;
    }
  }
  
  //? Sub-Class tanimlamasi (Inheritance)
  class Magazine extends Book {
    constructor(title, author, year, month) {
      //! Book'un constructor'i cagrildi
      super(title, author, year); //! Book'un prototpye kopyalnmis
      this.month = month;
    }
    //! Overrided Metot (Parent class'daki bir metodun farkli
    //! fonksiyonellikle fakat ayni isimle tanimlanmasi)
    getSummary() {
      return `${this.title} was writtten by ${this.author} in ${this.year} in ${this.month}`;
    }
  
    //!Override edilmis bir parent fonksiyonunu kullanmak icin super keyword'u kullanilabilr.
    getSummaryParent() {
      return super.getSummary();
    }
  }
  
  //? Magazine objesinin yeni bir instance
  const mag1 = new Magazine("Scientific Research", "Einstein", 1926, "Sep");
  console.log(mag1.getSummary());
  console.log(mag1.getSummaryParent());

 


  