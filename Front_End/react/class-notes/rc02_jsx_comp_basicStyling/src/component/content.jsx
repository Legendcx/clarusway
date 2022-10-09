//* JSX'de stillendirme farklli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3- )Local veya global degiskenler ile.
//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Material UI, Styled Component, Sass, Bootstrap v.b harici kutuphaneler kullanilabilir.
// ? Dahili bir resim eklemek icin import yapmak gereklidir.
import "./content.css";


//?
import img2 from "../img/spring2.jpg";

const Content = () => {
    const imgStyle = {
        display: "block",
        width:"300px",
        margin: "1rem auto"
    }
    return(
        <div>
            <h2 style={{color:"red"}}>React JS</h2>
            <p style={{backgroundColor:"lightgreen"}}>React , kulanıcı arabirim tasarlamak için kullanılan bir JSX kütüphanesidir.</p>
            <img 
            style={imgStyle}
            src="https://cdn.pixabay.com/photo/2017/02/15/13/40/tulips-2068692__340.jpg" alt="img1" />

            <img style={imgStyle} src={img2} alt="img2" />

            <p className="par-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis saepe at qui consequuntur blanditiis necessitatibus, ipsam architecto molestiae porro voluptate.
                </p>
        </div>
    )
}

export default Content; 