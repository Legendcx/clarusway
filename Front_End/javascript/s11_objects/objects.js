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

 //!-- object literal (en çok kullanılan yöntemdir.------
 
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
 let deepCopyWorker = JSON.parse(JSON.stringify(worker));
 console.log("DEEP:", deepCopyWorker);


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
//* } özel iteratorlar olduğu için itere ediliyor. biz bunu çok kullanmıyoruz

for (let person in people) {
  console.log(person);
  console.log(people[person]);
}

//! FOR - OF
//* for (x of iterable) {
//*   code block to be executed
//* } for of iterable larla çalışıyor.

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

  //!  -------------------------------

let myArray = [1,2,3,4,5];

let iterator = myArray[Symbol.iterator]();

console.log(iterator.next())


//!---------JSON => JAVASCRİPT OBJECT NOTATION

 // array içinde obje var. daha kolay itere edebilmek için bu kullanılmıştır. dizi içerisindeki objelere JSON denir. özellikle de veri ile fronted arasında kullanılıyor. bu formatta veriler gidip geliyor.

 const team = [{
  name: "Burhan", surname: "Adams", job:"developer", age: 30},
  {name: "Mary", surname: "Bary", job:"tester", age:22},
   {name: "Hazal", surname: "Nut", job:"developer", age:20}];

   console.log(team);
   console.log(team[2]);

   team.forEach((item) => console.log(item.job));

   //* age leri bir artırarak saklayınız.

   const ages = team.map((p) => console.log(p.age + 1));

   //*-----name -surname leri birleştirip buyuk harfe çeviren 

  //  const teamFullName= team.map((p) => ({
  //   fullName:p.name.toUpperCase() + " " + p.surname.toUpperCase(), 
  //   age: p.age + 5,
  //  }));

  //  console.log(teamFullName);


  //todo alternatif yöntem bu üstteki için
  const teamFullName= team.map((p) => {
    return {
      fullName:p.name.toUpperCase() + " " + p.surname.toUpperCase(), 
      age: p.age + 5,
    }
  });

   console.log(teamFullName);


   //! yaşı 22 den küçük olanları yazdırın

   team.filter((p) => p.age <=22).forEach((p) => console.log(p.name));


   //! yaşı 22 den küçük olanlrın dizi olarak çıkarın
   const teamUnder22 = team.filter((x) => x.age <= 22).map((p) => p.name);

   console.log(teamUnder22);

   //***yaşların ortalamasını alınız. */

   const avgAges = team.reduce((acc, value) => (acc += value.age), 0) / team.length;
   console.log(avgAges);