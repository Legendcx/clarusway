import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Language = ({name, img, options}) => {
  const [showImage, setShowImage] = useState(false);
  // console.log(lang);
  console.log(showImage);

  return <Container style={{background:"lightyellow"}} className="p-3 rounded-4  h-100 lang-card"
   onClick={()=> setShowImage(!showImage)}
  type="button">

    {!showImage && (<Container>
    <Image className="" src={img} width="70%"></Image>
    <h3 className="fs-2 fw-bold text-danger mt-2">{name}</h3>
  </Container>)}

  {showImage && ( <ol className="h-100 d-flex flex-column justify-content-center">
      {options.map((item) => {
        return<li className="h5 text-start">{item}</li>
        
      })}
    </ol>)}
   
    </Container>
};

export default Language;
