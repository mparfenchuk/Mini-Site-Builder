import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: ${props => props.centered && "flex"};
  text-align: ${props => props.centered && "center"};
  flex: 1;
  margin-bottom: 16px;
  padding: 8px;
  background:
    linear-gradient(115deg, transparent 75%, rgba(255,255,255,.8) 75%) 0 0,
    linear-gradient(245deg, transparent 75%, rgba(255,255,255,.8) 75%) 0 0,
    linear-gradient(115deg, transparent 75%, rgba(255,255,255,.8) 75%) 7px -15px,
    linear-gradient(245deg, transparent 75%, rgba(255,255,255,.8) 75%) 7px -15px,
    #E6EBE0;
  background-size: 15px 30px;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0,0,0,0.6);
  overflow: auto;
  position: relative;
  justify-content: ${props => props.centered && "center"};
  align-items: ${props => props.centered && "center"};;
`;