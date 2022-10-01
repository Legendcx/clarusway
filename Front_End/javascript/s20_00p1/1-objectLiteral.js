//* ======================================================
//*                     (OOPS)
//* ======================================================

//* Object Literals
console.log("**** Object Literals ****");

const book1 = {
    title: "The Kromozov Brothers",
    author: "Dostoevski",
    year: 1886,
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

console.log(book1);
console.log(book1.hasOwnProperty("author")); //true author propertisi olduğu için true oldu. bu özellik miras yoluyla geldi.


const book2 = {
    title: "The Lily of the Valley",
    author: "Honore de Balzac",
    year: 1888,
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

console.log(book2);
console.log(book2.getSummary());

//?object literal yöntemi ile fazla sayıda objeler oluşturmak oldukça zahmetlidir. ayrıca çok tekrar içeriyor.
//? çözüm Object Oriented Programming;,

let Storm = function () {};
Storm.prototype.precip = 'rain';
let WinterStorm = function () {};
WinterStorm.prototype = new Storm();
WinterStorm.prototype.precip = 'snow';
let bob = new WinterStorm();
console.log(bob.precip);