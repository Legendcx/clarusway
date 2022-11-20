
import styled from "styled-components";

export const Button = styled.button`
/* background-color: hotpink; */
background-color: ${(props) => (props.primary ? "purple" : "white")};
/* background-color: ${(props) => (props.primary ? "purple" : "white")}; */
background-color: ${({primary}) => (primary ? "purple" : "aqua")};
color: white;
cursor: pointer;
width: 8rem;
padding: 1.1rem 2rem;
border-radius: 0.6rem;
border-color: purple;
font-size: 1.2rem;
font-family: 'Segoe UI', sans-serif;
&:hover{
  transform: scale(0.96);
}
`;

export const TomatoButton = styled(Button)`
  background-color: ${(props) => (props.primary ? "tomato" : "red")};
  background-color: ${(props) => (props.primary ? "red" : "green")};
  border-color: tomato;

`

