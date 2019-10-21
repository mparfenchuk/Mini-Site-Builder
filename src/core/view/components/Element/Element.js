import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { getElementById } from '../../../../app/redux/selectors';

import Button from './components/Button';
import Paragraph from './components/Paragraph';
import H1 from './components/H1';

import { Div } from './Element.styled';

const Element = ({ elementId }) => {
  const element = useSelector(getElementById(elementId))

  if (element.type === 'button')
    return <Button {...element.properties} />

  if (element.type === 'h1')
    return <H1 {...element.properties} />

  if (element.type === 'p')
    return <Paragraph {...element.properties} />

  if (element.type === 'div') {
    return (
      <Div {...element.properties}>
        {element.children.map(childId =>
          <Element 
            key={childId} 
            elementId={childId}
          />
        )}
      </Div>
    )
  }
    
  return null;
}

export default memo(Element);
