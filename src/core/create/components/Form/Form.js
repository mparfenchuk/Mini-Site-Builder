import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field } from 'formik';

import { getSelectedElement, getSelectedFromContainerId } from '../../../../app/redux/selectors';
import { removeElement, removeElementFromContainer, unselectElement, setElementProperties } from '../../../../app/redux/actions';

import { pProperties, buttonProperties, divProperties, h1Properties } from '../../../../utils/elementsProperties';

import { Alert, Title } from '../../../../app/App.styled';
import { Wrapper, ButtonsWrapper, Button, SubmitButton, StyledForm, InputGroup, Input, Label } from './Form.styled';

const Form = () => {
  const selectedElement = useSelector(getSelectedElement)
  const selectedFromContainerId = useSelector(getSelectedFromContainerId)
  const dispatch = useDispatch();

  const submit = (values, actions) => {
    dispatch(setElementProperties(selectedElement.id, values))
    actions.resetForm()
  }

  const remove = () => {
    const elementId = selectedElement.id;
    const fromContainerId = selectedFromContainerId;
    const removingElements = [
      elementId, 
      ...(selectedElement.children 
        ? selectedElement.children 
        : [])
    ];

    if (fromContainerId === 'container')
      dispatch(removeElementFromContainer(elementId, removingElements))
    else
      dispatch(removeElement(elementId, fromContainerId, removingElements))
  }

  const unselect = () => dispatch(unselectElement());

  const selectedProperties = selectedElement && (
    selectedElement.type === 'button' ? buttonProperties :
    selectedElement.type === 'div' ? divProperties :
    selectedElement.type === 'h1' ? h1Properties :
    selectedElement.type === 'p' ? pProperties 
    : {});

  return (
    <Wrapper>
      <Title>
        Element properties
      </Title>
      {selectedElement ? 
        <>
          <Formik
            initialValues={{ 
              ...selectedProperties,
              ...selectedElement.properties
            }}
            onSubmit={submit}
            render={({ isSubmitting, isValid }) => (
              <StyledForm autoComplete="off">
                {Object.keys(selectedProperties).map(key => 
                  <Field key={key} name={key} render={({ field }) => (
                    <InputGroup>
                      <Label>
                        {key}:
                      </Label>
                      <Input type="text" {...field} />
                    </InputGroup>
                  )}/>)}
                <SubmitButton 
                  type="submit"
                  disabled={!isValid || isSubmitting}
                >
                  Save
                </SubmitButton>
              </StyledForm>
            )}
          />
          <ButtonsWrapper>
            <Button onClick={unselect}>
              Unselect
            </Button>
            <Button onClick={remove}>
              Remove
            </Button>
          </ButtonsWrapper>
        </>
        : <Alert small>
          There is no selected element...
        </Alert>
      }
      </Wrapper>
  )
};

export default Form;