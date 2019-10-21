import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { getElementById } from '../../../../../../app/redux/selectors';

import Button from './components/Button';
import Paragraph from './components/Paragraph';
import H1 from './components/H1';

import { Div } from './Element.styled';

const Element = ({ 
  fromContainerId, 
  elementId, 
  onDragStart, 
  onDragOver, 
  onDrop,
  select
}) => {
  const element = useSelector(getElementById(elementId))

  if (element.type === 'button') {
    return (
      <Button
        draggable
        onDragStart={onDragStart({ 
          elementId: element.id, 
          fromContainerId 
        })}
        onClick={select(element.id, fromContainerId)}
        selected={element.selected}
        {...element.properties}
      />
    )
  }

  if (element.type === 'h1') {
    return (
      <H1
        draggable
        onDragStart={onDragStart({ 
          elementId: element.id, 
          fromContainerId 
        })}
        onClick={select(element.id, fromContainerId)}
        selected={element.selected}
        {...element.properties}
      />
    )
  }

  if (element.type === 'p') {
    return (
      <Paragraph
        draggable
        onDragStart={onDragStart({ 
          elementId: element.id, 
          fromContainerId 
        })}
        onClick={select(element.id, fromContainerId)}
        selected={element.selected}
        {...element.properties}
      />
    )
  }

  if (element.type === 'div') {
    return (
      <Div
        draggable
        onDragStart={onDragStart({ 
          elementId: element.id, 
          fromContainerId 
        })}
        onDragOver={onDragOver}
        onDrop={onDrop(element.id)}
        onClick={select(element.id, fromContainerId)}
        selected={element.selected}
        {...element.properties}
      >
        {element.children.map(childId =>
          <Element 
            key={childId} 
            elementId={childId}
            fromContainerId={element.id}
            onDragStart={onDragStart} 
            onDragOver={onDragOver} 
            onDrop={onDrop}
            select={select}
          />
        )}
      </Div>
    )
  }
    
  return null
}

export default memo(Element);
