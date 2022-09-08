//======================================================
//*  DESTRUCTURING (OBJECT)
//* ======================================================
console.log("****** NEW OPERATORS *******");
const car = {
  name: "BMW",
  model: 1990,
  engine: 1.6,
  colors: ["blue", "purple"],
};
//* 1.YONTEM (Classical)
const name1 = car.name;
const model1 = car["model"];
//* 2.YONTEM: DESTRUCTURING
const { name, colors, model, engine } = car;
console.log(name, model, engine, colors);

const cars = {
  car1: {
    name: "BMW",
    model: 1990,
    engine: 1.6,
  },
  car2: {
    name: "Mercedes",
    model: 2022,
    engine: 2.0,
  },
};

const { car1, car2} = cars;
console.log(car1);

//? bir ÖRNEK :

const team = [
    {
      name: "Josh",
      surname: "Barry",
      job: "developer",
      age: 30,
    },
    {
      name: "Josh",
      surname: "Barry",
      job: "tester",
      age: 45,
    },
    {
      name: "Hazel",
      surname: "Nut",
      job: "team lead",
      age: 40,
    },
  ];

team.forEach((p) => {
    console.log("Name: ", p.name);
    console.log("Surname: ", p.surname);
    console.log("job: ", p.job);
    console.log("age: ", p.age);
} );

//* DESTRUCTURING
team.forEach((p) => {
  const { name, surname, job, age } = p;
  console.log("Name:", name);
  console.log("Surname:", surname);
  console.log("Job:", job);
  console.log("Age:", age);
});

// function örneği

 const getInfo = () => {
  return {
    id: 1,
    productName: "Iphone", 
    price: 30000,
  };
 };

 console.log(getInfo());
 const{ productName, price} = getInfo();

 console.log("Product Name:", productName);
 console.log("Product Price:", price);



//* ======================================================
//*  DESTRUCTURING (ARRAY)
//* ======================================================






//*======================================================
//*  REST (...)
//* ======================================================
// ? geri kalan demek array ve objelerden geri kalanlardan demektir. dizi içerisinde konumlandırır.

//*======================================================
//*  REST (...)
//* ======================================================

//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//* REST: (Arrays)

const autos = ["anadol",  "reno", "bmw", "mercedes", "ferrari"];
//todo geri kalanları almak için rest kullanıyoruz. ve kalanları alıyoruz. ve sonda kullanıyoruz. dizinin içinde geri kalnalrı almak için güzel bir özellliktir.

const [reno,anadol, ...restAutos] = autos;
console.log(restAutos);

//* REST: (objects)

const personel = {
    pname: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
};

const { pname, job, ...ageSurname} = personel;
console.log(ageSurname);
console.log(pname, job);

//! bir fonksiyonun argümanlarını diziye çevirmek için kullanılıyor.

// function sum (x, y){

//   return x + y;

// }

 const sum = (x, y) => x + y;
  //todo ilk iki argümanı toplar ve hata vermez. 2 parametre olan yerre biz 6 parametre verdik olmaz olmaz. bunu nasıl yapacağız. 
  console.log(sum(1,2,3,4,5,6));
//? rest operatörü dizi haline getiriyor.


  const sumAll = (...numbers) => {
    return numbers.reduce((s,n) => (s += n), 0);

  }

  console.log(sumAll(1,2,3,4));


//*======================================================
//*  SPREAD (...)
//* ======================================================