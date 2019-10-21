import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { 
  addElement, addElementAsChild, selectElement,
  addChild, moveChild, moveChildToContainer 
} from '@app/redux/actions';

import createElement from '@utils/createElement';

import { Wrapper, MainArea } from './Create.styled';

import Sidebar from './components/Sidebar';
import Container from './components/Container';
import Form from './components/Form';

const Create = () => {
  const dispatch = useDispatch();

  const onDragStart = useCallback(({ 
    type, 
    elementId, 
    fromContainerId 
  }) => e => {
    e.stopPropagation();
    e.dataTransfer.setData('type', type || '');
    e.dataTransfer.setData('elementId', elementId || '');
    e.dataTransfer.setData('fromContainerId', fromContainerId || '');
  }, [])

  const onDragOver = useCallback(e => e.preventDefault(), []);

  const onDropContainer = useCallback( e => {
    e.stopPropagation();

    const type = e.dataTransfer.getData('type');
    const elementId = e.dataTransfer.getData('elementId');
    const fromContainerId = e.dataTransfer.getData('fromContainerId');

    if (!elementId) {
      const element = createElement(type);
      dispatch(addElement(element))
    } else if (fromContainerId !== 'container') {
      dispatch(moveChildToContainer(fromContainerId, elementId))
    }
  }, [])

  const onDrop = useCallback(containerId => e => {
    e.stopPropagation();

    const type = e.dataTransfer.getData('type');
    const elementId = e.dataTransfer.getData('elementId');
    const fromContainerId = e.dataTransfer.getData('fromContainerId');

    if (!elementId) {
      const element = createElement(type);
      dispatch(addElementAsChild(element, containerId))
    } else if (fromContainerId === 'container' && containerId !== elementId) {
      dispatch(addChild(containerId, elementId))
    } else if (fromContainerId !== containerId && containerId !== elementId) {
      dispatch(moveChild(fromContainerId, containerId, elementId))
    }
  }, [])

  const select = useCallback((elementId, fromContainerId) => e => {
    e.stopPropagation();
    dispatch(selectElement(elementId, fromContainerId));
  }, [])

  return (
    <Wrapper>
      <Sidebar onDragStart={onDragStart} />
      <MainArea>
        <Container 
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDropContainer={onDropContainer}
          onDrop={onDrop}
          select={select} 
        />
        <Form />
      </MainArea>
    </Wrapper>
  )
};

export default Create;