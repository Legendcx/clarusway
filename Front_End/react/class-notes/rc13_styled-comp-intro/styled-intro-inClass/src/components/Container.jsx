

import styled from 'styled-components';

const Container = styled.div`
background: ${({bg}) => bg || "white"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  padding: 1.1rem;
 
  
`;

export default Container;

