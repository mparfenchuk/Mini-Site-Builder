import React from 'react';

import { StyledElementButton } from './ElementButton.styled';

const ElementButton = ({ title, ...props }) =>
  <StyledElementButton {...props}>
    {title}
  </StyledElementButton>

export default ElementButton;