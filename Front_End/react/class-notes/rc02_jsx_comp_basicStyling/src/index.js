import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";


// const App = () => {
//     return (
//         // bunu bir component yapmak için fonksiyonun baş harfini büyük yapmamız gerekir.
// <> 
//     <h1>Hello React</h1>
//     <p>Merhaba</p>
   
//     <Child />
//     <Child />
//     <Child />
//     <Child />
// </>
//     );
// };

//! index componenti ReactDOM.createRoot() metodu ile oluşturulur.
//! public klasorunde yer alan index.html icersindeki id'si root
//! olan elemana erisir.

//* render() metodu içerisinde App componenti cagrilir.

const Child = () => <p>I am child</p>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
