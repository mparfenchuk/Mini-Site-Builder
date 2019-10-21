import styled from 'styled-components';

export const Alert = styled.p`
  margin: 8px;
  font-size: ${props => props.small ? "14px" : "18px"};
`;

export const Button = styled.button`
  background: ${props => props.reset 
    ? "#9BC1BC" 
    : "#E6B89C"};
  color: white;
  font-size: 14px;
  font-family: 'IBM Plex Serif', serif;
  padding: 8px 16px;
  margin: 8px;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
`;

export const Title = styled.p`
  margin: 8px;
  font-weight: bold;
`;
