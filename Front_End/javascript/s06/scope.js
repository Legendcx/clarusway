console.log("SCOPE")
//! bir değişkenin tanımlandığı yere scope denir.

let sayi1 = 5;
console.log(sayi1);

const foknsi  = function() {
    sayi1 = 22;
    console.log(sayi1);
}
//? Global değişkenin değerini güncelleye biliriz.
foknsi()
console.log(sayi1++);

//todo --------------------------------------
let sayi2 = 7;
console.log(sayi2); // 7  global-scope

const kalin = () => {
    let sayi2 = 11;
    console.log(sayi2); // 11 function-scope
}

kalin();
console.log(sayi2++); // 7


// ! VS CODE da DEBUG nasıl yapılır araştır gel.