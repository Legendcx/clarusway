import Language from "./Language";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {data} from "../helpers/data";

const Card = () => {
  console.log(data);
  return (
    <Container className="rounded-3 mt-4 p-4" style={{ background: "crimson" }}>
      <h1 className="text-white my-3">LANGUAGE</h1>
      <Row className="g-3 justify-content-center">
       
        {data.map((lang, index)=>{
        return(
          <Col sm={6} md={4} lg={3} key={index}>
          <Language {...lang}  />;
          </Col>
          )
      })}
       
      </Row>      
    </Container>
  );
};

export default Card;
