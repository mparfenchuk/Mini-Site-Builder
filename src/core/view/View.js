import React from 'react';
import { useSelector } from 'react-redux';

import { getElementsInContainer } from '../../app/redux/selectors';

import { Alert } from '../../app/App.styled';
import { Wrapper } from './View.styled';

import Element from './components/Element';

const View = () => {
  const children = useSelector(getElementsInContainer);

  return (
    <Wrapper centered={children.length === 0}>
      {children.length === 0 
        && <Alert>
          There are no elements...<br/>Go to the main page and<br/>drag & drop any element from sidebar
        </Alert>}
      {children.map(childId => 
        <Element 
          key={childId} 
          elementId={childId}
        />)}
    </Wrapper>
  )
};

export default View;