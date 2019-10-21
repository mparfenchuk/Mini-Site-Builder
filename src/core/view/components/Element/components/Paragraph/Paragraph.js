import React from 'react';

import { StyledParagraph } from './Paragraph.styled';

const Paragraph = ({ text, ...props }) =>
  <StyledParagraph {...props}>
    {text || "Paragraph"}
  </StyledParagraph>

export default Paragraph;