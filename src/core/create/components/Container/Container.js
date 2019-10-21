import React from 'react';
import { useSelector } from 'react-redux';

import { getElementsInContainer } from '../../../../app/redux/selectors';

import { Alert } from '../../../../app/App.styled';
import { StyledContainer } from './Container.styled';

import Element from './components/Element';

const Container = ({ 
  onDragStart,
  onDragOver,
  onDropContainer,
  onDrop,
  select 
}) => {
  const children = useSelector(getElementsInContainer);

  return (
    <StyledContainer
      onDragOver={onDragOver}
      onDrop={onDropContainer}
      centered={children.length === 0}
    >
      {children.length === 0 
        && <Alert>
          There are no elements...<br/>Drag & drop any element from sidebar
        </Alert>}
      {children.map(childId => 
        <Element 
          key={childId} 
          elementId={childId} 
          fromContainerId="container"
          onDragStart={onDragStart} 
          onDragOver={onDragOver} 
          onDrop={onDrop}
          select={select}
        />)}
    </StyledContainer>
  )
};

export default Container;