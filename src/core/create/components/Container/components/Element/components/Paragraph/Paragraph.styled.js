import styled from 'styled-components';

export const StyledParagraph = styled.p`
  opacity: ${props => props.selected && "0.6"};
  font-size: ${props => props.fontSize || "16px"};
  color: ${props => props.textColor};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  cursor: pointer;
`;