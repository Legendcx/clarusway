//* ======================================================
//*                        EVENTS
//* ======================================================

console.log("****** EVENTS *******");

//!fonksiyondan farkı , fonksiyonu biz çağırıyoruz. ama events ları bizim yardımımızla browserlar çağırıyor. Javascriptin responsive olmanı sağlayan şey bu eventslardır.
//todo örenek olarak:  onclick, onload, onmouseover, onmouseout, onsubmit, onchenged, onkeyup bunlar HTML olaylarına örnektir.

//? en önemli özellik başka bir js dosyası ile events tanımlamak. amma biz 4. yol olan addEventListener() metodu ile js kodunda olau tanımlamak. 
//! element.addEventsListener(olay, fonksiyon) burada önemli olna şey events in önünde (on) kelimesi yoktur.

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* ----------------------------------
const h1 = document.querySelector("#header h1");

h1.onmouseover = function (){
    h1.style.color = "red";
    h1.style.fontweight = "red";

};

h1.onmouseout = () => {
h1.style.color = "black";
h1.style.fontweight = "300";
}

//*4 Method la ilgili bir örenek yaptık
h1.addEventListener('click', ()=> {
    alert("h1 pressed");
})





//* EXAMPLE-2 (addEventListener())
//* -------------------------------------------------
document.getElementById("btn").addEventListener("click", function(){
    const input = document.querySelector("#input")
    if(!input.value){
        alert("Please enter an item")
    } else{
        alert(`${input.value} entered`);
    }
    input.value = "";
});

// !input.value ? alert("Please enter an item") :   alert(`${input.value} entered`); burası ternary yöntemi ile yapılır.

const print = () => {
    console.log("starting");
}

//* EXAMPLE-2 (addEventListener())
//* -------------------------------------------------

const list = document.querySelectorAll(".list");

list.forEach((li) =>{
    li.style.transition = "all 1s";
    li.style.lineHeight = "2rem";
    li.onmouseover = () => {
        li.style.fontSize = "2rem";
        li.style.transform = "translateX(20px";
        
        
    };

    li.onmouseout = () => {
        li.style.fontSize = "1rem";
        li.style.transform = "translateX(-20px";
    };
})

//* EXAMPLE-4 (addEventListener())
//* -------------------------------------------------

window.onload = function (){
    document.querySelector("#input").focus();
}