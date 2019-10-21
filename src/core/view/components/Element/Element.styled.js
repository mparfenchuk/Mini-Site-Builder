import styled from 'styled-components';

export const Div = styled.div`
  background: white;
  background-image: url('${props => props.backgroundImage}');
  background-repeat: no-repeat;
  display: ${props => props.display};
  position: ${props => props.position};
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  min-height: 96px;
  font-size: 14px;
  box-shadow: 0 0 8px rgba(0,0,0,0.6);
`;