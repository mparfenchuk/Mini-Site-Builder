import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${props => props.color || "#FF1654"};
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: ${props => props.padding || "8px 16px"};
  color: ${props => props.textColor || "white"};
  font-size: ${props => props.fontSize || "14px"};
  font-family: 'IBM Plex Serif', serif;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
`;