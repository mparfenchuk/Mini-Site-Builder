import styled from 'styled-components';
import { Form } from 'formik';

export const Wrapper = styled.div`
  position: relative;
  height: 96px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0,0,0,0.6);
  padding: 8px;
  overflow: auto;
`

export const SubmitButton = styled.button`
  background: #E6B89C;
  color: white;
  font-size: 14px;
  font-family: 'IBM Plex Serif', serif;
  padding: 8px 16px;
  margin: 8px;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  :disabled {
    opacity: 0.6;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  margin-right: 8px;
`;

export const InputGroup = styled.div`
  padding: 8px;
  margin-right: 16px;
`;

export const Input = styled.input`
  min-width: 32px;
  width: 40px;
  padding: 4px;
  border: 1px solid #EAEAEA;
  border-radius: 4px;
  outline: none;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

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