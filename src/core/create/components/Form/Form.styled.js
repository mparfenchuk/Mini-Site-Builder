import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 96px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0,0,0,0.6);
  padding: 8px;
  overflow: auto;
`

export const ButtonsWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

export const Button = styled.button`
  background: #9BC1BC;
  color: white;
  font-size: 11px;
  font-family: 'IBM Plex Serif', serif;
  padding: 6px 12px;
  outline: none;
  cursor: pointer;
`;