import Card from "./components/Card";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container className="text-center mt-4 p-4">
      <Header />
      <Card />
    </Container>
  );
}

export default App;
