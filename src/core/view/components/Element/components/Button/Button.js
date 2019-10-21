import React from 'react';

import { StyledButton } from './Button.styled';

const Button = ({ text, ...props }) =>
  <StyledButton {...props}>
    {text || "Button"}
  </StyledButton>

export default Button;