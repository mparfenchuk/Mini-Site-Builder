import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 128px;
  margin: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0,0,0,0.6);
  padding: 8px;
  overflow: auto;
`

export const Grow = styled.div`
  flex-grow: 1;
`;

export const Divider = styled.hr`
  width: 100%;
`;

export const LinkButton = styled.button`
  background: none!important;
  border: none;
  color: #069;
  font-size: 16px;
  font-family: 'IBM Plex Serif', serif;
  padding: 8px 0px;
  margin: 8px;
  outline: none;
  cursor: pointer;
  text-decoration: underline;
`;