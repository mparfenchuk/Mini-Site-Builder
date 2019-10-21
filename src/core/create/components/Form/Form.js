import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSelectedElement, getSelectedFromContainerId } from '@app/redux/selectors';
import { removeElement, removeElementFromContainer, unselectElement, setElementProperties } from '@app/redux/actions';

import { Alert, Title } from '@app/App.styled';
import { Wrapper, ButtonsWrapper, Button } from './Form.styled';

import ButtonForm from './components/ButtonForm';
import DivForm from './components/DivForm';
import H1Form from './components/H1Form';
import ParagraphForm from './components/ParagraphForm';

const Form = () => {
  const selectedElement = useSelector(getSelectedElement)
  const selectedFromContainerId = useSelector(getSelectedFromContainerId)
  const dispatch = useDispatch()

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

  return (
    <Wrapper>
      <Title>
        Element properties
      </Title>
      {selectedElement ? 
        <>
          {selectedElement.type === 'button' && 
            <ButtonForm 
              submit={submit}
              selectedProperties={selectedElement.properties 
                ? selectedElement.properties : {}}
            />}
          {selectedElement.type === 'div' && 
            <DivForm 
              submit={submit}
              selectedProperties={selectedElement.properties 
                ? selectedElement.properties : {}}
            />}
          {selectedElement.type === 'h1' && 
            <H1Form 
              submit={submit}
              selectedProperties={selectedElement.properties 
                ? selectedElement.properties : {}}
            />}
          {selectedElement.type === 'p' && 
            <ParagraphForm 
              submit={submit}
              selectedProperties={selectedElement.properties 
                ? selectedElement.properties : {}}
            />}
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