console.log("App js running");

// const a = 5;
// console.log(a);
// var olursa ortadakinden sonra alttaki aynı olur
// let ve const ta ise ortadaki değer tek olur yine başa döner olay

// {
//     const a =3;
//     console.log(a);
// }

// console.log(a);

// let a = 5;
// console.log(a);

// { // başına let a = 3; dersek aşağısı etkilenmez. sadece burası etkilenir.
    // a = 3;  // atama yapdığımız için burası globali de etkiliyor.
    // aşağısı da buradan ekleniyor.
//     console.log(a);
// }

// console.log(a);

/* console.log(typeof 0);2
console.log(typeof 3.14);
console.log(typeof 'Hello');
console.log(typeof 8 > 10);
console.log(8 > 10);12
console.log(typeof ''); */

// let b = +prompt('Bir şey giriniz');  // bu artı işreti girilen değer string alıyor ama bir rakamsa bunu o artı işareti rakama  dönüştürüyor.

// console.log(b, typeof b);123


// console.log(typeof (typeof 42));

/* 
string olan sayı ifadesini
başına + ekleyip number tipine
parseInt(stringVar) ile integer number a
parseFloat(stringVar) ile kesirli sayı
elde ederiz  
*/

// let age;
// console.log(age);  // undefined

// console.log(myAge); // is not defined

// let age;
// console.log(age);  // undefined

// console.log(myAge); // is not defined

// var myAge = 40;
// var myAge1 = 40;
// var myAge2= 40;
// var myAge3= 40;  // atanmış olan bunlar kullanlmıyor ama cihazıımızda bir yer kaplıyor. oyüzden genel de let kullanmalıyız.
// var myAge4= 40;
// console.log('Hello');

// NULL (boşluk veya yokluk)

// let x ;
// do {5
//     x = prompt('enter a number : ');
// }while (isNaN(x));

// console.log(x, x*x);



// console.log('12' * '12')


// let x = 123456789001234
// let y = 123456789001234123

// let z = 0.12345678901234567
// let zz = 0.123456789012345675678

// console.log('12' === 12)

// console.log({x})
// console.log({y},typeof y)

// console.log(z)
// console.log(zz)

// let g = (0.1 + 0.2);
// console.log(g)
// console.log(+g.toFixed(2));  // tofixed yaparsak string yapar

// let h = 1_000_000_000;  // bu alt çizgiler sadece yazmak için kolaylıklar sağlar. ama yine aynı şekilde çıkar.
// console.log(h);


// STRİNGLER = metinler

// let i = 'This is a string';
// let j = "This is a string";
// let k = `This is a string`;

// console.log(i);
// console.log(j);
// console.log(k);

// let userName = 'Burhan';
// console.log(userName.length);

// console.log("Merhaba ", userName);
// console.log(`Merhaba ${userName}`);
// console.log(`2 +3 = ${2+3}`);
// console.log(`2 +3 = ${'2'+'3'}`);

// BOOLEAN DATA TYPE ;

// let m = ``;
// let n = ` `;
// let P = 0;

// console.log(Boolean(m))
// console.log(Boolean(n))
// console.log(Boolean(P))
// console.log(Boolean(3>4))

// OBJECT -->> REferans tipli veri tipidir.birden fazla veri tipini alabilirler.

// const myCar = {
//     make : 'ford',
//     model : "Mustang",
//     year : 1965,
//     color : 'Black'
// }

// console.log(myCar);

// myCar.color = "green"  // atama yapmıyoruz. içindeki nesnenin değerini değiştiriyoruz.
// console.log(myCar);
// myCar.sunRoof = "false";
// console.log(myCar);

// myCar.age = function(current){
//     console.log(current - this.year)
// }

// console.log(myCar);

// myCar.age(2022);