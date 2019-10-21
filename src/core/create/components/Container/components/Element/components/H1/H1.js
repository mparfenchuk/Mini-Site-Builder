import React from 'react';

import { StyledH1 } from './H1.styled';

const H1 = ({ text, ...props }) =>
  <StyledH1 {...props}>
    {text || "H1"}
  </StyledH1>

export default H1;