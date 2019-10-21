import styled from 'styled-components';

export const StyledH1 = styled.h1`
  font-size: ${props => props.fontSize || "32px"};
  color: ${props => props.textColor};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;