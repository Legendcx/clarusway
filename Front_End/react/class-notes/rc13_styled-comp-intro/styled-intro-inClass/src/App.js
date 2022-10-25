import { Button, TomatoButton } from "./components/Button"
import Container from "./components/Container";
import HeaderText from "./components/HeaderText.styled";
import StyledLink from "./components/Link.styled";

const App = () => {
  return (
    <>
    <Container bg="grey">
      <HeaderText color="hotpink">STYLED COMPONENTS</HeaderText>
      <Button primary>Save</Button>
      <Button primary >Clear</Button>
      <TomatoButton primary>Send</TomatoButton>
      <TomatoButton primary>Burhan</TomatoButton>
    </Container>
    <Container bg="#eea">
      <StyledLink href="https://clarusway.com/" target="_blank">Clarusway</StyledLink>
      <StyledLink secondary href="https://google.com/" target="_blank">Google<StyledLink/>

      </StyledLink>
      </Container>
      </>
  );
};

export default App;
