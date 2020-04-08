import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import Form from './Form';

import theme from "./theme";

createGlobalStyle`
  body{
    padding:0;
    margin:0;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Form />
      </Container>
    </ThemeProvider>
  );
}
const Card = styled.div`
  background-color: red;
`;


const Container = styled.div`
  height: 100vh;
  width:100%;
  background-color: #bdc3c7;
  ${Card} {
    background-color: blue;
  }
`;

export default App;