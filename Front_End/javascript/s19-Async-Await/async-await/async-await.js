// //*=================================================
// //*              ASYNC-AWAIT
// //*=================================================
// //? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
// //? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
// //? Bu baglamda sentetik seker benzetmesi yapilabilir.

// //* Bir fonskiyonu asenkron hale getirmek icin fonksiyon keyword'nun onune
// //* async keyword'u eklenir.

// //* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
// //* beklenmesi saglanir.

// //* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
// //* kod yazmayı mumkun kilar.

// //* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
// //* satirdaki kodun durudurulmasini saglar. Yapilan istek yerine getirilip sonuc
// //* degerlerinin dondurulmesine ile kodun calismasi devam eder.



// let isError = false;

// const getNews = async function (){
//     const API_KEY = "f8330b5ab903445588c9318ef341e5f4";
//     const url = "https://newsapi.org/v2/top-headlines?country=tr&apiKey=" + API_KEY;

  
    
//     try {
//     const res = await fetch(url);
//     if(!res.ok){
//         isError = true;
//         // throw new Error(`Something went wrong: ${res.status}`);

//         //! hatayı fırlatırsak catch te kodu durdurur.
//     }
//     const data = await res.json();
//     console.log(data.articles);
//     renderNews(data.articles);
// //! try and catch kullanmassak orada durur ve hata olarak önümüze gelir.
//     } catch (error) {
//         console.log(error);
//     }    
// };

// const renderNews = (news) => {
//     newsList = document.getElementById("news-list");
//     if(isError){
//         newsList.innerHTML += `
//         <h2>News can not be fetched</h2>
//         <img src="./img/404.png" alt="" />`
//     }

//     news.forEach((item) => {
//        const {title, description, urlToImage, url} = item;
//        newsList.innerHTML +=`
//        <div class="col-md-6 col-lg-4 col-xl-3">
//        <div class="card">
//   <img src="${urlToImage}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${title}</h5>
//     <p class="card-text">${description}</p>
//     <a href="${url}" target="_blank" class="btn btn-danger">Details</a>
//   </div>
//   </div>
// </div>`
//     })
    
// }



// window.addEventListener("load", getNews);
// // getNews(); bunun yerine yukarıdaki de yazılabilir.


const note = {
    id: 1,
    title: 'My first note',
    date: '01/01/1970',
    author: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
    },
  };
  // traditional way
//   const id = note.id;
//   const title = note.title;
//   const firstName = note.author.firstName;
// //   // destructuring
  const { id, title, date, author: { firstName, lastName, email } } = note;
  console.log(`${firstName} ${lastName}`, id, title, date, email);
  console.log(note);