console.log("===== MERHABA OBJECTS  =========")

// const arabalar = new Object();
// arabalar.marka = "BMW",
// arabalar.motor = "1.3",
// arabalar.model = "2022",
// arabalar.lpg = true;

// console.log(arabalar);

//! okumak için 
// Köşeli parantez kullanırsak  key değerini değişken olarak kullanabilyoruz
// console.log(arabalar.lpg);
// console.log(arabalar["model"]);

//!---------------------------------

// object constructure yapısı:

// function Personel(id, ad, maas) {
//     this.perId = id;
//     this.perAd = ad;
//     this.maas = 15000;
// }
//  const kisi1 = new Personel("1234567890", "Burhan", 20000);
//  console.log(kisi1)

 // object literal (en çok kullanılan yöntemdir.
 
 const worker = {
    name: "can",
    surname: "Canan",
    age: 43,
    job: "developer", 
    languages: ["Java", "C++", "Javascript", "Python", "Go"],
    salary: 15000,

 };


 console.log(worker.languages[2]);
 console.log(worker);

 console.log(worker.job);
 console.log(worker["languages"]);
 worker["languages"].forEach((L) =>console.log(L));
 worker.dayOfBirth = "1990";
 worker.email = "can@gmail.com"
 console.log(worker)

 worker["salary"] = worker["salary"] * 1.1;
 console.log(worker);


 //----------------- Object Copy  -----------------------------

 const person = worker; // buna sığ/shallow denir. birebir assign etmedir. create(), spread(), concat(), slice(). 

 //deep copy 
 let deepCopyWorcer = JSON.parse(JSON.stringify(worker));
 console.log("DEEP:", deepCopyWorcer);


 //*=======================================================
 //*               Object Metodları
 //*=====================================================

 const personal = {
    name: "can",
    surname: "Canan",
    dob: "1990",
    job: "developer", 
    salary: 15000,
    drivingLicence: true,
    calculateAge: function(){
        return new Date().getFullYear() - this.dob;
    },
    //todo = arrow function lar this leri oratadan kaldırmak için yapılmıştır.
    //! NOT: arrow fonksiyonlari ozellikle callback fonksiyonu olarak
//! kullanilmak ve bu fonksiyonlarda this keyword kullanim
//! gereksinimini kaldirmak icin gelistirilmistir.
//! Lexical context'e sahiptirler.Dolayisiyla, bir obje fonksiyonu
//! olarak kullanilirsa, this kelimesi global scope'u (window nesnesini)
//! gösterir. Bunu engellemek için object fonksiyonlarini tanimlarken
//! diger (func. expression veya declaration) yontemlerini kullanabilir.

summary: function() {
    return `${this.name} is ${this.calculateAge} years old.`
}
    // summary: () => {
    //     return `${this.name} is ${this.calculateAge} years old.`
    // }

 };

 console.log("Age :", personal.calculateAge());
 console.log("SUMMARY :", personal.summary());

 //*=======================================================
 //*               Object ITERASYONLARI
 //*=====================================================


const people = {

 can: {

    name: "can",
    surname: "Canan",
    dob: "1990",
    job: "developer", 
    salary: 15000,
    drivingLicence: true,
},

john: {

    name: "Kerim",
    surname: "Can",
    dob: "1980",
    job: "developer", 
    salary: 25000,
    drivingLicence: false,
},

Burhan: {

    name: "Burhan",
    surname: "Canim",
    dob: "1970",
    job: "legendcx", 
    salary: 125000,
    drivingLicence: true,
},
};

console.log(people);
console.log(people.john["salary"]);
console.log(people.john.salary);

//? Javascripte objeler default olarak iterable değildir.
//? ama for in ve for of döngüleri ile itere edilebilirler.


//? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
//? Bu mettotlar aslinda objelerin key ve/veya value'lari bir dizi olarak dondurur.
console.log(Object.keys(people));
console.log(Object.values(people));
console.log(Object.entries(people));

//! FOR - IN
//* for (key in object) {
//*   // code block to be executed
//* }

for (let person in people) {
  console.log(person);
  console.log(people[person]);
}

//! FOR - OF
//* for (x of iterable) {
//*   code block to be executed
//* }

for (let key of Object.keys(people)) {
  console.log(key);
}

for (let v of Object.values(people)) {
    console.log(v);
  }

  for (let v of Object.values(people)) {
    console.log(v.salary);
  }

  for (let [key, value] of Object.entries(people)) {
    console.log(`${key} - ${value.salary}`);
  }

  //! ARRAY METODLARI İLE

  Object.keys(people).forEach((p) => console.log(p));
  Object.values(people).forEach((p) => console.log(p.surname));
  Object.values(people).filter((p) => p.job==="developer")
  .forEach((p) => console.log(p.dob));