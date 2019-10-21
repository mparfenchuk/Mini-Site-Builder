import styled from 'styled-components';

export const Wrapper = styled.div`
  display: ${props => props.centered && "flex"};
  height: ${props => props.centered && "100%"};
  text-align: ${props => props.centered && "center"};
  justify-content: ${props => props.centered && "center"};
  align-items: ${props => props.centered && "center"};
`