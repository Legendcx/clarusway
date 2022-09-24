//*========================================
//*             3- FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH");

let userData;

fetch("https://api.github.com/users")
.then((res) => {
    // console.log(res);

    //!Error handling diyoruz. hatayı yakalıyoruz. Fetch api responsive gelirse kendisini başarılı sayıyor. Biz de hatayı kendimiz yazdırıyoruz.
    if(!res.ok){
        throw new Error("Something went wrong")
    }else{
        return  res.json();
    }
    
})

.then((data) => updateDOM(data))
.catch((err) => console.log(err));

console.log(userData);

const updateDOM = (users)=> {
    console.log(users);
    const userDiv = document.querySelector(".users");
    users.forEach((user) => {
        userDiv.innerHTML += `<h2>${user.login}</h2><img src="${avatar_url}" width="300px`;
        
    });
}



// let x = 0;
// async function test() {
//  x += await 2;
//  console.log(x);
// }
// test();
// x += 1;
// console.log(x);

// console.log('I');
// setTimeout(() => {
//  console.log('love');
// }, 0);
// console.log('Javascript!');

var v = 1;
var f1 = function () {
//  console.log(v);
};
var f2 = function () {
 var v = 2;
f1();
};
console.log(f2);