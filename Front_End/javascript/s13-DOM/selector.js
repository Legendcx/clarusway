console.log("***** SELECTORS *****");

// //*===========================================
// //*            GETELEMENTBYID()
// //*===========================================

// //* EXAMPLE-1
// //*-------------------------------------------

// const h1 = document.getElementById("header");
// console.log(h1);
// h1.style.color = "white";
// h1.style.background = "red";

// //* EXAMPLE-2
// //*-------------------------------------------

// const myInput = document.getElementById("input");
// const button = document.getElementById("btn");
// button.style.background = "black";
// button.style.color = "white";
// button.style.width = "7rem";
// button.style.border = "none";
// button.style.borderRadius = "10px";
// button.style.padding = "1rem";
// button.style.fontSize = "1.1rem";
// myInput.style.padding = "1rem";

// //*===========================================
// //*            GETELEMENTBYTAGNAME()
// //*===========================================

// const list = document.getElementsByTagName("li");
// // html collection olarak bize (DİZİ DÖNDÜRÜR []) döndürüyor.
// console.log(list);
// list[2].style.color = "red";
// const elementThree =list.item(3);
// elementThree.style.color = "blue";

// elementThree.textContent = "React / Vue / Angular";

// list[4].innerText = "Django / Flask";

// //innerHTML html kodlarını çalıştırır. güvenlik açısından sıkıntılıdır. tavsiye etmiyoruz. hackerlara derleme alanı sunuyor.
// list[4].innerHTML = "<a href='https://www.clarusway.com'>Clarusway</a>";


// //*===========================================
// //*            GETELEMENTBYCLASSNAME()
// //*===========================================

// const myList = document.getElementsByClassName("list");
// console.log(myList);
// console.log(myList[0].innerText);

// //?dizi metodları doğrudan kullanılamaz ama spread ve Array.from ile kullanılabilir hale gelir.
// const myListArray = Array.from(myList);
// // myList.forEach((items) => console.log(item.innerText));

// [...myList].forEach((item) => console.log(item.innerText));

// [...myList].forEach((item) => item.style.color = "purple");

// //*===========================================
// //*            QUERYSELECTOR()
// //*===========================================

// //? etiket seçebilir

// const myLi = document.querySelector("li");
// console.log(myLi.innerText);
// myLi.style.color = "yellowgreen";

// //? 2 class seçebilir

// const itemList = document.querySelector(".item-list");
// itemList.style.background = "grey";

// //? queriler id seçebilir

// const input1 = document.querySelector("#myInput");
// console.log(input1.value);

// document.querySelector("#btn").style.cursor = "pointer";

// //? queriselectorler CSS gibi seçim yapabiliriz.

// const itemH2 = document.querySelector(".item-list h2");
// itemH2.style.color = "green";

// const myBtn = document.querySelector("input[type='button']");
// console.log(myBtn);

// //*===========================================
// //*            QUERYSELECTORALL()
// //*===========================================

// const lists = document.querySelectorAll("ul li");
// console.log(lists); //?nodelist getiriyor

// lists.forEach((li) => console.log(li.innerText));

// console.log(
//     document.querySelectorAll("section ul li:nth-child(3)")[0].innerText
//   );
// //*===========================================
// //*            TRAVERSİNG DOM
// //*===========================================


// //* 1 - Yukarı yönde traverse

// const list = document.querySelector(".list");
// const ul = list.parentNode;
// ul.style.border = "2px solid red";

// console.log(list.parentNode.parentNode.parentNode);

// console.log(list.closest("section"));
// itemListSec.style.background = "grey";


// console.log("***** SELECTORS *****");

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

//* EXAMPLE-1
//*-------------------------------------------

const h1 = document.getElementById("header");
console.log(h1);
h1.style.color = "white";
h1.style.background = "red";

//* EXAMPLE-2
//*-------------------------------------------

const myInput = document.getElementById("input");
const button = document.getElementById("btn");
button.style.background = "black";
button.style.color = "white";
button.style.width = "7rem";
button.style.border = "none";
button.style.borderRadius = "10px";
button.style.padding = "1rem";
button.style.fontSize = "1.1rem";
// myInput.style.padding = "1rem";

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

//*EXAMPLE-3
//*-------------------------------------------

const list = document.getElementsByTagName("li");
console.log(list); //? HTML Collection
list[2].style.color = "red";
const elementThree = list.item(3);
elementThree.style.color = "blue";
elementThree.textContent = "React / Vue / Angular";

list[4].innerText = "Django / Flask";

console.log(list[1].textContent);
console.log(list[1].innerText);

//? HTML kodlarini calistirir. (Guvenlik acisindan problemli)
list[4].innerHTML = "<a href='https://www.clarusway.com'>Clarusway Web</a>";

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

//* EXAMPLE-4
//* ------------------------------------------
const myList = document.getElementsByClassName("list");
console.log(myList); //? HTML Collection
console.log(myList[0].innerText);

//? HRML Collection'larda Dizi metotlari dogrudan kullanilamaz.
//? Spread ve Array.from() ile kullanilabilri hale gelir.

//?Array.from()
const myListArray = Array.from(myList);
myListArray.forEach((item) => console.log(item.innerText));

//?Spread
[...myList].forEach((item) => console.log(item.innerText));

[...myList].forEach((item) => (item.style.color = "red"));

//* ========================================
//*              QUERYSELECTOR()
//* ========================================

//? 1- queryselector() etiket secebilir.
const myLi = document.querySelector("li");
console.log(myLi.innerText);
myLi.style.color = "yellowgreen";

//? 2- queryselector() class secebilir.

const itemList = document.querySelector(".item-list");
itemList.style.background = "grey";

//? 3- queryselector() id secebilir.
const input = document.querySelector("#input");
// console.log(input.value);

document.querySelector("#btn").style.cursor = "pointer";

//? 4- queryselector() ile CSS deki gibi secim yapilabilir.

const itemH2 = document.querySelector(".item-list h2");
itemH2.style.color = "purple";

const myBtn = document.querySelector("input[type='button']");
console.log(myBtn);

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================

const lists = document.querySelectorAll("ul li");
console.log(lists); //? nodelist

lists.forEach((li) => console.log(li.innerText));

console.log(
  document.querySelectorAll("section ul li:nth-child(3)")[0].innerText
);
console.log(document.querySelector("section ul li:nth-child(3)").innerText);
