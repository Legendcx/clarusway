






class Book {
    constructor(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;

    //?bu alanda yazılan bir metod bütün insteance lerin belleğinde yer kaplar. hepsinde olur. burası global alnadır.
    
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


class Magazin extends Book {
    constructor(title, author, year, month){
        //!super diyerek BOOk'un constructor unun çağırdık burada..
        super(title, author, year)
        this.month = month;
    }

    //! overriding Metot (Parent class taki bir metodun farklı fonksiyonellikle fakat aynı isimle tanımlanması)
    getSummary = function () {
        return `${this.title} was writtten by ${this.author} in ${this.year} in ${this.month}`;
    };
    getSummaryParent (){
        return super.getSummary();
    }

}

const mag1 = new Magazine("pcNet", "Burhan", 2005, "Sep");
console.log(mag1);
console.log(mag1.getSummaryParent());