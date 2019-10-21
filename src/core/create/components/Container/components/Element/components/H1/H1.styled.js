import styled from 'styled-components';

export const StyledH1 = styled.h1`
  opacity: ${props => props.selected && "0.6"};
  font-size: ${props => props.fontSize || "32px"};
  color: ${props => props.textColor};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  cursor: pointer;
`;