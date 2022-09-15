

let unluHarfler = "aeuüoöıiAEUIOÖİÜ".split("");
console.log(unluHarfler);

let count = 0;
document.querySelector(".btn").addEventListener("click", () => {
    const metinAlani = document.querySelector(".metinAlani").value;
    const msg =document.querySelector(".msg");
    console.log(metinAlani);

    if(!metinAlani){
        msg.innerText = "Plesae enter a wovels";
    }
})