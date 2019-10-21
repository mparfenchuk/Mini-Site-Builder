import styled from 'styled-components';
import { Form } from 'formik';

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

export const StyledForm = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
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
