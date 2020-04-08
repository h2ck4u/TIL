import React from 'react';
import Button from './Button';
import styled from "styled-components";

const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
);

const Card = styled.div`
  background-color: red;
`;


export default Form;