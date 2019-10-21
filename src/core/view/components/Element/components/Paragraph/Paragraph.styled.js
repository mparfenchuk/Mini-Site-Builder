import styled from 'styled-components';

export const StyledParagraph = styled.p`
  font-size: ${props => props.fontSize || "16px"};
  color: ${props => props.textColor};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;