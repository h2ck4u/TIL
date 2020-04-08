import React from 'react';
import styled from "styled-components";

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor};
`;

export default Button;