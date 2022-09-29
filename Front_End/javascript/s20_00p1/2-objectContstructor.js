//* ======================================================
//*             OOP - Object Constructor (ES5)
//* ======================================================

//* Javascript, prototype-temelli bir dildir.
//* Butun JavaScript nesneleri (objects) ozellikleri (properties)
//* ve metotlari bir prototipten miras olarak almaktadir.
//* Object prototipi, prototip miras zincirinin en tepesinde yer almaktadir.
//* Ornegin Date ve Array nesneleri Object.prototype'dan miras almaktadir.

//? Object Constructor

//? Object Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    // this.getSummary = function () {
    //   return `${this.title} was writtten by ${this.author} in ${this.year}`;
    // };
  }
  
  
  //? new keyword'u Book Constructor'ini parameterler ile cagirmaktadir.
  //? Constructor ise Book nesnesinden bir ornek (instance) olusturmaktadir.
  //? Constructor, mantiksal bir ifade iken instance fiziksel bir olusum gibi dusunulebilir.
  //? Contructor'da tanimlanmis tum degisken ve fonksiyonlar olusturulan


  //? her bir instance'da hayat bulmus olur.
  const book1 = new Book("Kasagi", "Omer Seyfettin", 1920);
  const book2 = new Book("Sinekli Bakkal", "H. Edip Adıvar", 1930);

  
  
  //!book1 e yeni properti ekledik
  //   console.log(book1);
  
  //!burada ne yaptık fonksiyonlarımızı objeniin babası olan prototip ' in içine yazdık ve global ettik. böylece fosiyonu bir daha yazmak zorunda kalmıyoruz.

  Book.prototype.getAge = function () {
      return new Date().getFullYear() - this.year;
    };
    
    Book.prototype.getSummary = function () {
        return `${this.title} was writtten by ${this.author} in ${this.year}`;
    };
    
    //? sadece book1 e yazdığımız için sadece book1 de görünüyor.
    Book.prototype.price = 100;
    // book1.price = 100;

    //* Ornegin Book nesnesinin tum instance'lari getAge() fonksiyonunu miras alabilir.
//* Ancak, getAge() fonksiyonu bellekte sadece bir yer kaplamaktadir.
//* Bir nesnenin prototiplerine .prototype ile erisilebilir.
//* Ancak bir instance'in prototiplerine .__proto__ ile erisilmektedir.

    console.log(Book.prototype)
    console.log(book1.__proto__);

    console.log(book1.getSummary());
    console.log(book1)
    console.log(book2);

