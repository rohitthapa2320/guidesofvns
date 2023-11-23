import React from 'react';
import { styled } from "styled-components";

const StyledDiv= styled.div`
  width: 100%;
  height: 8vh;
  background: #ffbf69;
  margin: 0px;
`;

const Heading= styled.p`
  margin: 0px;
  font-size: 24px;
  font-weight: 600;
  font-family: 'Helvetica', sans-serif;
  color: #030e12;
  padding: 16px;
`;


const Navbar = ():JSX.Element => {
  return(
    <StyledDiv>
      <Heading>GuidesOfVaranasi</Heading>
    </StyledDiv>
  );
}

export default Navbar;