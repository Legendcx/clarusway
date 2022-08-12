"use scrict"

// OPERATORS
// userName = "Burhan Ali"
// let selamlama = `Hoşgeldiniz, ${username}, xyz bankası iyi günler diler`;
// console.log(selamlama)


// comperation operators

// console.log(3 == "3");  // true
// console.log(3 != "3");  // false
// console.log(3 === "3");  false
// console.log(3 !== "3");  // true
// console.log(3 <= "2");  // false
// console.log(3 >= "2");  // true
// console.log(null == null);  // true
// console.log(null === null);  // true
// console.log(NaN === NaN);  // false
// console.log(NaN == NaN);  // false
// console.log(undefined == undefined);  // true
// console.log(undefined === undefined);  // true

// ! virgül işleci de bir atama operatorüdür. 
// ! en son yazılan değeri return eder
// ? örnek 
// let kel = (1,2,3);
// console.log(kel);


// ! LOGİCAL OPERATORS

// ? AND=&& --- ||=OR --- !=NOT bunlardır.

// ! Nullish Coalescing Operator

// x = value(ındefined&null) ise ?? mesaj yazıyoruz. 

// const result = 0 ?? 42;
// console.log(` result --> ${result}`); // result= 0

// ! ?? solundaki count2 null/undefined ise sağındaki değeri ver yani 1
// !  ?? solundaki count2 null/undefined değilse count2 değerini ver yani 0
// let count2 = 0;
// let result2 = count2 ?? 1;
// console.log(result2); // result = 0

// let bur = 5;
// let bur2 = bur ?? 1;
// console.log(bur2);

 // ! 1. SORU

// let x, y ;

// x = +prompt("enter a number);
// y = +prompt("enter annother number);

// console.log(53`${x} * ${y} = ${x*y}`);
// console.log(`${x} / ${y} = ${x/y}`);


// ! 2. SORU

// let x, y ;
// x = +prompt("bir sayı yazınız: ")
// y =  +prompt("bir sayı giriniz ")
// console.log(x*y);
// console.log(x/y);


// ! 3. SORU
// let a,b;

// a = +prompt("bir sayı giriniz");5
// b = +prompt("bir sayı giriniz");

// console.log(`dikdörtgen alan ${a*b}`);


// ! 4. SORU
// let r = +prompt("yarıcap giriniz");
// let dairealan = (Math.PI) * r * r;
// console.log(dairealan);

// let c_derece = +prompt("bir derece giriniz");



// ! 5. SORU
// let a = prompt(` enter temperature °C :`)
// let fahrenait = (((9 * a) + ( 32 *5)) / 5)
// console.log( `${a} °C = ${fahrenait} is °F`)

// ! 6. SORU

// güne bir ekledik çünkü 0 dan başlıyor. 
// const today = new Date();
// console.log("day of month is ", today.getDate());
// console.log("month of year is ", today.getMonth() + 1);
// console.log("year is ", today.getFullYear());
// // ? BU DA OLUR Alttaki
// console.log(` day of month is ${today.getDate()}`);
// console.log(` month of year is ${today.getMonth() + 1}`);
// console.log(` year is ${today.getFullYear()}`);

// console.log(today);

// ! 7.soru

// let a, b, c;

// a = +prompt("bir sayı giriniz :");
// b = +prompt("bir sayı giriniz :");
// c = +prompt("bir sayı giriniz :");

// let d = ((a % 10) == (b % 10) == (c % 10));
// console.log("There are at least 2 numbers having same first digits : ", d);


// let a = +prompt("enter a number");
// let b = +prompt("enter a number");
// let c = +prompt("enter a number");
// const d = ((a % 10) === (b % 10) || (a % 10) === (c % 10) || (b % 10) === (c % 10)); 
// console.log(`There are at least 2 numbers having same first digits ${d}`);



// ! MATHEW instructor ın sunusu

// console.log('app js running');

/*
* 1. Write a JavaScript code to calculate multiplication and division of two numbers (input from user). : 5min

​
*/
// ? again solution anwers
// let a, b;
// a = 3;
// b = 2;

// console.log(`${a} x ${b} = ${a * b} \n${a} / ${b} = ${a / b}`);


// let num1 = +prompt('Enter first number');
// let num2 = +prompt('Enter second number');
// console.log(`${num1} x ${num2} is ${num1 * num2}, \n${num1} / ${num2} is ${num1 / num2}`);

/*
 * 2. area calculation: 7min
 * area of any triangle (given only sides) ---
​
 * area of rectangle (given o1nly sides)
 * area of circle (given only radius)
 * perimeter of circle (given only radius)
 *
 * pi sayisi olarak :  Math.PI / 3.141592653589793
 * 

 */

// ! Burhan tekrar yapıyor soruları... Aferin ona
/* 
let ken1 = +prompt("Üçgenin first kenarının length inin giriniz :");
 let ken2 = +prompt("Üçgenin second kenarının length inin giriniz :");
 let ken3 = +prompt("Üçgenin third kenarının length inin giriniz :");

 let cevre = (ken1 + ken2 + ken3) / 2;
 console.log(cevre);
 let area = Math.sqrt(cevre * ((cevre - ken1) * (cevre - ken2) * (cevre - ken3)));
 console.log(`Area og triangle is ${area.toFixed(2)}, perimeter is ${cevre}`);
*/





// let side1 = +prompt('Enter first side');
// let side2 = +prompt('Enter second side');
// let side3 = +prompt('Enter third side');

// const perimeter = (side1 + side2 + side3) / 2;
// const area = Math.sqrt(
//   perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)),
// );

// console.log(`Area of triangle is ${area}, perimeter is ${perimeter}.`);
/*
* 3. temperature convertion : 8min
* celcius to fahrenheit
* fahrenheit to celcius
​
*/

// ! Burhan yine bir örnekle geldi yanınıza. çalışın arkadaşlar. çalışanlar mutlaka kazanacaklardır.
// let cTemp = +prompt('Enter celcius temperatur');
// let toFarnen = (cTemp * 9) / 5 +32;
// console.log(`${cTemp} ℃ equal ${toFarnen.toFixed(2)} ℉ tır.`)
// ----------------------------------------------------------
// let cTemp = +prompt('Enter celcius temperature');
// const cToFahr = (cTemp * 9) / 5 + 32;
// console.log(`${cTemp}°C equals ${cToFahr.toFixed(2)}°F`);

// let fTemp = +prompt('Enter fahrenheit temperature');
// const fToCel = ((fTemp - 32) * 5) / 9;
// console.log(`${fTemp}°F equals  ${fToCel.toFixed(2)}°C`);

/*
 * 4. print today's date separately :8min
 * day of month is 11
 * month of year is 8
 * year is 2022

 */
// ! Burhan örnek çalışma ve tekrarı etmek için yapılmış bir çalışmadır.
// let today = new Date();
// console.log(today);

// console.log(today.getDate());
// console.log(today.getDay() + 1);
// console.log(today.getFullYear());
// console.log(today.getHours());
// console.log(today.getMinutes());
// console.log(today.getTime());
// console.log(today.getTimezoneOffset());

// const today = new Date();
// console.log(today);

// console.log(today.getFullYear());
// // * use today (.) for needed functions

// console.log(`day of month is ${today.getDate()}`);
// console.log(`month of year is ${today.getMonth() + 1}`);
// console.log(`year is ${today.getFullYear()}`);

/*
​
* 5. check from three given numbers (non negative integers) that two or all of them have the same rightmost digit. : 10min
​
* 22 32 42 => true
* 15 24 45 => true
* 33 34 35 => false
​
*/

/*
stage is yours
There are at least 2 numbers having same first digit: true/false
​
*/
// todo Benim yaptığım bir örnektir. Tekrar ettim
// let a = Number(prompt("Enter first number"));
// let b = Number(prompt("Enter second number"));
// let c = Number(prompt("Enter third number"));
// let result = a % 10 === b % 10 || a % 10 === c % 10 || b % 10 === c % 10 ;

// console.log(`there are at least 2 number having same first digit : ${result}`);

// let p = +prompt('Enter first number');
// let q = +prompt('Enter second number');
// let r = +prompt('Enter third number');

// const result = p % 10 === q % 10 || p % 10 === r % 10 || q % 10 === r % 10;

// console.log(`There are at least 2 numbers having same first digit: ${result}`);